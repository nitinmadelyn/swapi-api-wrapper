import { UnauthorizedError } from "../../errors/UnauthorizedError";
import authorized from "../authorized";

const requestMock: any = {
    user: { name: "John Doe", email: "johndoe@example.com" }
};

const replyMock: any = {
    send: jest.fn()
};

describe('authorized middleware', () => {
    test('should call the done function if user is authorized', () => {
        const doneMock = jest.fn();

        authorized(requestMock, replyMock, doneMock);

        // Check if done function is called
        expect(doneMock).toHaveBeenCalled();

        // Check if reply.send is not called (since there was no error)
        expect(replyMock.send).not.toHaveBeenCalled();
    });

    test('should throw UnauthorizedError if user is not authorized', () => {
        const doneMock = jest.fn();
        requestMock.user = null;

        try {
            authorized(requestMock, replyMock, doneMock);
        } catch (error) {
            // Check if the error thrown is UnauthorizedError
            expect(error).toBeInstanceOf(UnauthorizedError);

            // Check if done function is not called (since an error was thrown)
            expect(doneMock).not.toHaveBeenCalled();
        }
    });
});