abstract class SwapiWrapperError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, SwapiWrapperError.prototype);
    }

    abstract serializeErrors(): {
        status: boolean;
        data?: object;
        message?: string;
    };
}

export { SwapiWrapperError };
