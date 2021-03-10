import { ApiResponse } from './api-response';
export declare class PagedApiResponse<TResponse> extends ApiResponse<TResponse> {
    count: number;
    constructor(result?: TResponse, count?: number);
}
