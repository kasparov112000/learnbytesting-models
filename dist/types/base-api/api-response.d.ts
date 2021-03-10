import { ApiError } from './api-error';
import { ApiResponseMessage } from './api-response-message';
export declare class ApiResponse<TResponse> {
    version: string;
    statusCode: number;
    message: ApiResponseMessage;
    responseException: ApiError;
    result: TResponse;
    constructor(result?: TResponse);
}
