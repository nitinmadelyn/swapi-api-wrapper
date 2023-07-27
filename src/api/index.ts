import AutoLoad from '@fastify/autoload';
import { FastifyInstance, errorCodes } from 'fastify';
import path from 'path';
import { BadRequestError } from './errors/BadRequestError';
import errorHandler from './middlewares/error-handler';
import { ServerRequestError } from './errors/ServerRequestError';

export default () => async (instance: FastifyInstance) => {
  // Register 404 handler
  instance.setNotFoundHandler((request, reply) => {
    const { method, url } = request;
    const message = 'Request not recognized or route not found.';
    instance.log.error({ err: { url, method } }, message);

    reply.code(404).send({ message });
  });

  // Load plugins
  await instance.register(AutoLoad, {
    dir: path.join(__dirname, '..', 'plugins'),
    ignorePattern: /\.test?\.(ts|js)/,
  });

  // Load routes
  instance.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /\.test?\.(ts|js)/,
  });

  // Error handler middleware
  instance.setErrorHandler((error, request, reply) => {
    // To handle all server error from swapi.dev
    if (['ECONNREFUSED', 'ETIMEOUT', 'ENOTFOUND', 'EHOSTUNREACH'].includes(error.code)) {
      errorHandler(new ServerRequestError(`Unable to reach https://swapi.dev ${error}`), request, reply);
      return;
    }

    // Request validation handler
    if (error.code === 'FST_ERR_VALIDATION') {
      errorHandler(new BadRequestError(error.toString()), request, reply);
      return;
    }

    //All other error handler
    errorHandler(error, request, reply);
  });

};
