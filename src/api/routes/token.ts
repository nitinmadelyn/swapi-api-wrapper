import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import generateTokenSchema from '../schema/token';
import { User } from '../models/user';
import { generateJWTToken } from '../helpers/jwt';


export default async (instance: FastifyInstance) => {
    instance.post('/token', { schema: generateTokenSchema }, async (_: FastifyRequest, reply: FastifyReply) => {
        const { name, email }: any = _.body;

        const user = await User.countDocuments({ email });
        if (!user) {
            const userBuild = User.build({
                name,
                email
            });
            await userBuild.save();
        }
        const token = generateJWTToken({ name, email });

        reply.setCookie('token', token);
        reply.code(user ? 200 : 201).send({ status: true, data: { token } });
    });
};
