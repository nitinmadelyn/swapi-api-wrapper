import axios from "axios";
import { getPlanets } from "../planets";
import { mockPlanetsData } from "../../../tests/mocks/planets";

jest.mock('axios');


describe('getPlanets', () => {
    test('should retrieve and merge all planets correctly', async () => {
        const planetsUrls = ['https://swapi.dev/api/planets/9/', 'https://swapi.dev/api/planets/14/', 'https://swapi.dev/api/planets/23/'];

        const responses = mockPlanetsData.planets;

        // Mock the Axios GET requests
        responses.forEach((response) => {
            (axios.get as jest.Mock).mockImplementationOnce(() =>
                Promise.resolve({ data: response })
            );
        });

        const result = await getPlanets(planetsUrls);
        expect(result).toEqual(mockPlanetsData.expectedPlanets);
    });
});