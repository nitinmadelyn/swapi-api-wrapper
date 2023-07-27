import { FastifyRequest } from 'fastify';
import { BadRequestError } from '../../errors/BadRequestError';
import { DatabaseConnectionError } from '../../errors/DatabaseConnectionError';
import errorHandler from '../error-handler';
import { UnauthorizedError } from '../../errors/UnauthorizedError';
import { ServerRequestError } from '../../errors/ServerRequestError';

describe('errorHandler', () => {
    // TO DO: mockReply should have type :FastifyReply
    const mockReply: any = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should handle BadRequestError instanceof SwapiWrapperError correctly', () => {
        const err = new BadRequestError('Swapi API error');
        const request: FastifyRequest = {} as FastifyRequest;

        errorHandler(err, request, mockReply);

        expect(mockReply.status).toHaveBeenCalledWith(400);
        expect(mockReply.send).toHaveBeenCalledWith(err.serializeErrors());
    });

    test('should handle DatabaseConnectionError instanceof SwapiWrapperError correctly', () => {
        const err = new DatabaseConnectionError();
        const request: FastifyRequest = {} as FastifyRequest;

        errorHandler(err, request, mockReply);

        expect(mockReply.status).toHaveBeenCalledWith(500);
        expect(mockReply.send).toHaveBeenCalledWith(err.serializeErrors());
    });

    test('should handle UnauthorizedError instanceof SwapiWrapperError correctly', () => {
        const err = new UnauthorizedError();
        const request: FastifyRequest = {} as FastifyRequest;

        errorHandler(err, request, mockReply);

        expect(mockReply.status).toHaveBeenCalledWith(401);
        expect(mockReply.send).toHaveBeenCalledWith(err.serializeErrors());
    });

    test('should handle ServerRequestError instanceof SwapiWrapperError correctly', () => {
        const err = new ServerRequestError('Server error');
        const request: FastifyRequest = {} as FastifyRequest;

        errorHandler(err, request, mockReply);

        expect(mockReply.status).toHaveBeenCalledWith(500);
        expect(mockReply.send).toHaveBeenCalledWith(err.serializeErrors());
    });

    test('should handle generic Error correctly', () => {
        const err = new Error('Generic error');
        const request: FastifyRequest = {} as FastifyRequest;

        errorHandler(err, request, mockReply);

        expect(mockReply.status).toHaveBeenCalledWith(500);
        expect(mockReply.send).toHaveBeenCalledWith({
            status: false,
            message: err.message,
        });
    });
});