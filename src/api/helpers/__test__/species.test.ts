import axios from 'axios';
import { getSpecies } from '../species';
import { mockSpeciesData } from '../../../tests/mocks/species';

jest.mock('axios');

describe('getSpecies', () => {
    test('should retrieve all species correctly', async () => {
        // Mock the axios GET requests for species api 
        (axios.get as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({ data: mockSpeciesData.results })
        );

        // Mock the axios GET requests for planet api
        const responses = mockSpeciesData.planets;
        responses.forEach((response) => {
            (axios.get as jest.Mock).mockImplementationOnce(() =>
                Promise.resolve({ data: response })
            );
        });

        const result = await getSpecies('1');
        expect(result).toEqual(mockSpeciesData.expected);
    });
});