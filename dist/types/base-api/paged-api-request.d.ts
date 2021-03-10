import { SortedApiRequest } from './sorted-api-request';
export declare class PagedApiRequest extends SortedApiRequest {
    page?: number;
    pageSize?: number;
    constructor(sort?: string, page?: number, pageSize?: number);
}
