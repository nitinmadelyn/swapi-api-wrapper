import { User } from "../../models/user";
import jwt from 'jsonwebtoken';
import currentUser from "../current-user";
import { UnauthorizedError } from "../../errors/UnauthorizedError";

// Mock Fastify request and reply objects
const requestMock: any = {
    cookies: {
        token: 'valid-token'
    }
};

const replyMock: any = {
    send: jest.fn().mockReturnThis()
};

describe('currentUser middleware', () => {
    test('should set user property in the request object if token is valid and user exists', async () => {
        User.countDocuments = jest.fn().mockResolvedValue(1);

        const payload = { name: "John Doe", email: 'johndoe@example.com' };
        jwt.verify = jest.fn().mockReturnValue(payload);

        await currentUser(requestMock, replyMock);

        // Check if User.countDocuments and jwt.verify are called with the correct arguments
        expect(User.countDocuments).toHaveBeenCalledWith({ email: payload.email });
        expect(jwt.verify).toHaveBeenCalledWith(requestMock.cookies.token, process.env.JWT_KEY);
        // Check if the request object's user property is set to the payload
        expect(requestMock.user).toEqual(payload);
        // Check if reply.send is not called (since there was no error)
        expect(replyMock.send).not.toHaveBeenCalled();
    });

    test('should throw UnauthorizedError if token is invalid', async () => {
        // Mock jwt.verify to throw an error
        jwt.verify = jest.fn().mockImplementation(() => {
            throw new Error('Invalid token');
        });

        try {
            await currentUser(requestMock, replyMock);
        } catch (error) {
            // Check if the error thrown is UnauthorizedError
            expect(error).toBeInstanceOf(UnauthorizedError);

            // Check if reply.send is not called (since an error was thrown)
            expect(replyMock.send).not.toHaveBeenCalled();
        }
    });
});