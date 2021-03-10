import { ApiRequest } from './api-request';
export declare class SortedApiRequest extends ApiRequest {
    sort?: string;
    constructor(sort?: string);
    /**
     * Sets the sort of the ApiRequested with the specified property and direction.
     * Default direction is Ascending if none is provided.
     * Sending an undefined or null property will also clear the current sort.
     */
    setSort(property?: string, direction?: string): void;
}
