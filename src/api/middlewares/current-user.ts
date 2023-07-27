import { FastifyReply } from "fastify";
import jwt from 'jsonwebtoken';
import { ModifyFastifyRequest } from "../interfaces/interface";
import { UserAttributes, User } from "../models/user";
import { UnauthorizedError } from "../errors/UnauthorizedError";

const currentUser = async (
    _: ModifyFastifyRequest,
    reply: FastifyReply
): Promise<void> => {
    if (_.cookies.token) {
        try {
            const payload = jwt.verify(
                _.cookies.token,
                process.env.JWT_KEY!
            ) as UserAttributes;

            const isUserExists = await User.countDocuments({ email: payload.email });
            if (isUserExists) {
                _.user = payload;
            }
        } catch (error) {
            console.error('currentUser middleware error:', error);
            throw new UnauthorizedError();
        }
    }
}

export default currentUser;