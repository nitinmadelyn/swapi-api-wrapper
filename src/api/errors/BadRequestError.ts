import { SwapiWrapperError } from './SwapiWrapperError';

class BadRequestError extends SwapiWrapperError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return { status: false, message: this.message };
    }
}

export { BadRequestError };
