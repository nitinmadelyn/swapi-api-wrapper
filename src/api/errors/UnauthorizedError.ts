import { SwapiWrapperError } from './SwapiWrapperError';

class UnauthorizedError extends SwapiWrapperError {
    statusCode = 401;

    constructor() {
        super('super: Unauthorized');
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    serializeErrors() {
        return {
            status: false,
            message: 'You are not authorized to access this resource.'
        };
    }
}

export { UnauthorizedError };