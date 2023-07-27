import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { getSpecies, getSpeciesDetail } from '../helpers/species';
import authorized from '../middlewares/authorized';
import getSpeciesSchema from '../schema/species';


export default async (instance: FastifyInstance) => {
    instance.get('/species/:id?/', { preHandler: authorized, schema: getSpeciesSchema }, async (_: FastifyRequest, reply: FastifyReply) => {
        const { page, sort } = _.query as { page?: number, sort?: string };
        const { id } = _.params as { id?: number };

        let species: any;
        if (id) {
            species = await getSpeciesDetail(id);
        } else {
            species = await getSpecies(page || 1);

            // sort by average_height
            if (sort) {
                species.results.sort((a, b) => (parseInt(a.average_height) || 0) - (parseInt(b.average_height) || 0));
            }
        }

        reply.code(200).send(species);
    });
};