import config from 'config';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import authorized from '../middlewares/authorized';
import getSpeciesSchema from '../schema/species';
import { Planet } from '../models/planet';
import { UpdateWriteOpResult } from 'mongoose';
import { BadRequestError } from '../errors/BadRequestError';

const SWAPI_BASEURL: string = config.get('swapi.base_url');

export default async (instance: FastifyInstance) => {
    instance.put('/planets/:planetId?/', { preHandler: authorized, schema: getSpeciesSchema }, async (_: FastifyRequest, reply: FastifyReply) => {
        const { planetId } = _.params as { planetId: string };
        const { is_destroy } = _.body as { is_destroy: boolean };

        const homeworld = `${SWAPI_BASEURL}planets/${planetId}/`;
        const updateFlag: UpdateWriteOpResult = await Planet.updateOne({ homeworld }, { $set: { is_destroy } });

        if (updateFlag.matchedCount === 0) {
            throw new BadRequestError('Planet not found');
        }
        if (updateFlag.modifiedCount === 0) {
            throw new BadRequestError(`Planet destruction flag is already '${is_destroy}'`)
        }

        reply.code(200).send({ status: true, message: "Planet destruction flag updated successfully." });
    })
};