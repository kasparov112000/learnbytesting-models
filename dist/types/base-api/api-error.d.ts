import { ApiValidationError } from './api-validation-error';
export declare class ApiError {
    isError: boolean;
    exceptionMessage?: string;
    foo: boolean;
    details?: string;
    validationErrors: Array<ApiValidationError>;
    constructor(isError?: boolean, exceptionMessage?: string, details?: string);
}
