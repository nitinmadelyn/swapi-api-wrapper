import { FastifyRequest, FastifyReply, FastifyError } from "fastify";
import { SwapiWrapperError } from "../errors/SwapiWrapperError";

const errorHandler = (
    error: Error,
    _: FastifyRequest,
    reply: FastifyReply
) => {
    if (error instanceof SwapiWrapperError) {
        return reply.status(error.statusCode).send(error.serializeErrors());
    }

    return reply.status(500).send({ status: false, message: error.message });
};

export default errorHandler;