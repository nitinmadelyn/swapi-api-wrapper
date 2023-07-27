import { build } from '../../../server';
import { getCookie } from '../../../tests/auth-helper';
import { mockSpeciesData } from '../../../tests/mocks/species';
import axios from 'axios';

jest.mock('axios');
const server = build();

afterAll(() => {
    jest.clearAllMocks();
})

describe('/species api endpoint tests', () => {

    it('returns 401 with unauthorized error', async () => {
        const response = await server.inject().get('/species/');

        const body = response.json();
        expect(response.statusCode).toBe(401);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.status).toBe(false);
        expect(body.message).toBe('You are not authorized to access this resource.');
    });

    it('returns 400 with validation error', async () => {
        const response = await server.inject().get('/species/johndoe/');

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.status).toBe(false);
        expect(body.message).toBe('Error: params/id must be number');
    });

    it('returns 400 with validation error for sort querystring', async () => {
        const response = await server.inject().get('/species/?sort=name');

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.status).toBe(false);
        expect(body.message).toBe('Error: querystring/sort must be equal to one of the allowed values');
    });

    // TO DO: fix axios mock
    xit('returns 200 with spieces data and associated planet data', async () => {
        const token = await getCookie();

        // Mock the axios GET requests for species api 
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockSpeciesData.results });

        // Mock the axios GET requests for planet api
        const responses = mockSpeciesData.planets;
        responses.forEach((response) => {
            (axios.get as jest.Mock).mockResolvedValueOnce({ data: response });
        });

        const response = await server.inject().get('/species/').cookies({ token });

        const body = response.json();
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(body.results)).toBe(true);
        expect(body.results.length).toBeGreaterThan(0);

        //Check each result has a valid homeworld value
        body.results.forEach((result) => {
            expect(result).toHaveProperty('homeworld');
            expect(typeof result.homeworld === 'object' || result.homeworld === null).toBe(true);
        });
    });

    it('returns 200 with spieces data and associated planet data sorted by average_height', async () => {
        const token = await getCookie();

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

        const response = await server.inject().get('/species/?sort=average_height').cookies({ token });

        const body = response.json();

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(body.results)).toBe(true);
        expect(body.results.length).toBeGreaterThan(0);
        expect(body.results).toEqual(mockSpeciesData.sortedSpecies);
    });

    it('returns 200 with single spieces data by id and associated planet data', async () => {
        const token = await getCookie();

        // Mock the axios GET requests for species api 
        (axios.get as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({ data: mockSpeciesData.singleResult })
        );

        // Mock the axios GET requests for planet api
        (axios.get as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({ data: mockSpeciesData.singlePlanet })
        );

        const response = await server.inject().get('/species/1/').cookies({ token });

        const body = response.json();
        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('homeworld');
        expect(typeof body.homeworld === 'object' || body.homeworld === null).toBe(true);
    });
});