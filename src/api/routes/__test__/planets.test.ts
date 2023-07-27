import { build } from '../../../server';
import { getCookie } from '../../../tests/auth-helper';
import { mockSpeciesData } from '../../../tests/mocks/species';
import axios from 'axios';

const server = build();
jest.mock('axios');

beforeEach(() => {
    (axios.get as jest.Mock)
        .mockImplementationOnce(() => Promise.resolve({ data: mockSpeciesData.singleResult }))
        .mockImplementationOnce(() => Promise.resolve({ data: mockSpeciesData.singlePlanet }));
});

afterEach(() => {
    (axios.get as jest.Mock).mockClear();
    jest.clearAllMocks();
});

describe('Update planet status', () => {
    it('should update the planet`s is_destroy status', async () => {
        const token = await getCookie();

        const response1 = await server.inject().get('/species/1/').cookies({ token });
        const body1 = response1.json();

        const homeworld = body1.homeworld.url.split('/').filter(Boolean).pop();
        const response = await server.inject().put(`/planets/${homeworld}/`).body({ is_destroy: true }).cookies({ token });
        const body = response.json();

        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.message).toBe('Planet destruction flag updated successfully.');

    });

    it('should return 400 with error no Planet found', async () => {
        const token = await getCookie();

        await server.inject().get('/species/1/').cookies({ token });

        const response = await server.inject().put(`/planets/1/`).body({ is_destroy: true }).cookies({ token });
        const body = response.json();

        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.message).toBe('Planet not found');

    });

    //TO DO: fix axios mock
    xit('should return 400 with a error message as destruction flag can`t be updated', async () => {
        const token = await getCookie();

        const response1 = await server.inject().get('/species/1/').cookies({ token });
        const body1 = response1.json();

        const homeworld = body1.homeworld.url.split('/').filter(Boolean).pop();
        const response = await server.inject().put(`/planets/${homeworld}/`).body({ is_destroy: false }).cookies({ token });
        const body = response.json();

        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Planet destruction flag is already 'false'");
    });
})