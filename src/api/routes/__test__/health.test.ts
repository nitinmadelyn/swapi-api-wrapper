import { build } from '../../../server';

const server = build();

describe('/health api endpoint - only for code coverage', () => {
    it('returns 200 with health status', async () => {
        const response = await server.inject().get('/health');

        const body = response.json();
        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('healthy');
        expect(body.healthy).toBe(true);
    });
});