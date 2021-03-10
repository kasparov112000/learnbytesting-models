import { ApiQuery } from './api-query';
import { QueryOperator } from './query-operator';
export declare class ApiRequest {
    query: Array<ApiQuery>;
    sort?: string;
    where<TModel>(expression: (model: TModel) => boolean, parameters?: any): ApiRequest;
    useQuery(name: string, value: any, queryOperator: QueryOperator): this;
    orderBy(sort: string): ApiRequest;
    clear(propertyName?: string): void;
    private updateQueries;
}
