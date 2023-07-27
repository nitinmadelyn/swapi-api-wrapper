import { SwapiWrapperError } from './SwapiWrapperError';

class ServerRequestError extends SwapiWrapperError {
    statusCode = 500;

    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, ServerRequestError.prototype);
    }

    serializeErrors() {
        return { status: false, message: this.message };
    }
}

export { ServerRequestError };
