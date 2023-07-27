import { build } from '../../../server';

const server = build();

describe('generate toke api', () => {
    it('returns 400 with missing `name`', async () => {
        const response = await server.inject().post('/token').body({});

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(false);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Error: body must have required property 'name'");
    });

    it('returns 400 with missing `email`', async () => {
        const response = await server.inject().post('/token').body({ name: "" });

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(false);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Error: body must have required property 'email'");
    });

    it('returns 400, `name` should have atleast 3 characters', async () => {
        const response = await server.inject().post('/token').body({ name: "", email: "" });

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(false);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Error: body/name must NOT have fewer than 3 characters");
    });

    it('returns 400 with invalid `email`', async () => {
        const response = await server.inject().post('/token').body({ name: "John Doe", email: "" });

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(false);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Error: body/email must match format \"email\"");
    });

    it('returns 400 with invalid `email`', async () => {
        const response = await server.inject().post('/token').body({ name: "John Doe", email: "john" });

        const body = response.json();
        expect(response.statusCode).toBe(400);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(false);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe("Error: body/email must match format \"email\"");
    });

    it('returns 201 with token', async () => {
        const response = await server.inject().post('/token').body({ name: "John Doe", email: "johndoe@example.com" });

        const body = response.json();
        expect(response.statusCode).toBe(201);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(true);
        expect(body).toHaveProperty('data');
        expect(body.data).toHaveProperty('token');
        expect(typeof body.data.token).toBe('string')
    });

    it('returns 200 with token', async () => {
        await server.inject().post('/token').body({ name: "John Doe", email: "johndoe@example.com" });
        const response = await server.inject().post('/token').body({ name: "John Doe", email: "johndoe@example.com" });

        const body = response.json();
        expect(response.statusCode).toBe(200);
        expect(body).toHaveProperty('status');
        expect(body.status).toBe(true);
        expect(body).toHaveProperty('data');
        expect(body.data).toHaveProperty('token');
        expect(typeof body.data.token).toBe('string')
    });
})
