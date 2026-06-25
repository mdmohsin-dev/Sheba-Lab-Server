declare class APIError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string | undefined, stack?: string);
}
export default APIError;
//# sourceMappingURL=APIError.d.ts.map