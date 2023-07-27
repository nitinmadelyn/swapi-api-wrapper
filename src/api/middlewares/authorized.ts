import { FastifyReply } from "fastify";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { ModifyFastifyRequest } from "../interfaces/interface";

const authorized = (
    _: ModifyFastifyRequest,
    reply: FastifyReply,
    done: () => void,
) => {
    if (!_.user) {
        throw new UnauthorizedError();
    }

    done();
};

export default authorized;