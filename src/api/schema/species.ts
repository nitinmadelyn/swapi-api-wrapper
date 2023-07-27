import { FastifySchema } from "fastify";

const getSpeciesSchema: FastifySchema = {
    querystring: {
        $id: 'getSpecies',
        type: 'object',
        properties: {
            sort: { type: 'string', enum: ['average_height'] },
            page: { type: 'number', minimum: 1 },
        }
    },
    params: {
        $id: 'getSpeciesParams',
        type: 'object',
        properties: {
            id: { type: 'number', minimum: 1 },
        }
    }
}

export default getSpeciesSchema;