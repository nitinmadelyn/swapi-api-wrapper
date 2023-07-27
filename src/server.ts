import config from 'config';
import { fastify as Fastify, FastifyInstance } from 'fastify';
import mongoose from 'mongoose';
import api from './api';
import { DatabaseConnectionError } from './api/errors/DatabaseConnectionError';
import FastifyCookie from '@fastify/cookie';
import currentUser from './api/middlewares/current-user';

const INTERFACE: string = config.get('http.interface');
const PORT: number = config.get('http.port');

export const build = () => {
  // Instantiate Fastify
  const server: FastifyInstance = Fastify({
    ajv: {
      customOptions: {
        strict: false,
      },
    },
    logger: true
  });

  server.addHook('onClose', async () => {
    // Handle any shutdown events

    // disconnect mongodb
    await mongoose.disconnect();
  });

  // Register the API scaffolding plugin.
  server.register(api());

  server.register(FastifyCookie);
  server.addHook('onRequest', currentUser);

  return server;
};

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("DB connect error:", error);
    throw new DatabaseConnectionError();
  }
}

export const start = async (server: FastifyInstance): Promise<FastifyInstance> => {
  try {
    await server.listen({ port: PORT, host: INTERFACE });
    await connectDB();
  } catch (err) {
    if (err) {
      server.log.error({ err }, 'Server startup error');
      process.exit(1);
    }
  }

  return server;
};

export default (): Promise<FastifyInstance> => {
  return start(build());
};
