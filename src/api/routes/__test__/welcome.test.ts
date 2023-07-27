import { build } from '../../../server';

const server = build();

describe('/welcome api endpoint - only for code coverage', () => {
    it('returns 200 with welcome message', async () => {
        const response = await server.inject().get('/welcome');

        const body = response.json();
        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('message');
    })

});