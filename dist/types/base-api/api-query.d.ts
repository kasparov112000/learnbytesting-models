import { ApiQueryOperator } from './api-query-operator';
export declare class ApiQuery {
    name: string;
    value: string;
    apiQueryOperator?: ApiQueryOperator;
    constructor(init?: {
        name?: string;
        value?: string;
        apiQueryOperator?: ApiQueryOperator;
    });
}
