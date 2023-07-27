import { FastifySchema } from "fastify";

const generateTokenSchema: FastifySchema = {
    body: {
        $id: 'generateTokenSchema',
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 3 },
            email: { type: 'string', format: 'email' },
        },
        required: ['name', 'email'],
    }
}

export default generateTokenSchema;