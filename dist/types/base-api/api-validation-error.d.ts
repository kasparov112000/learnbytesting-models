export declare class ApiValidationError {
    field: string;
    errorType: string;
    message: string;
    constructor(init?: {
        field?: string;
        errorType?: string;
        message?: string;
    });
}
