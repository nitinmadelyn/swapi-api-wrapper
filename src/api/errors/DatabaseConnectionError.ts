import { SwapiWrapperError } from "./SwapiWrapperError";

class DatabaseConnectionError extends SwapiWrapperError {
    statusCode = 500;

    constructor() {
        super('super: Database connection error.');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return { status: false, message: 'Error connecting to database' };
    }
}

export { DatabaseConnectionError };
