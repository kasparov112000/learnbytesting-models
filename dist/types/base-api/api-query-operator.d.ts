import { QueryOperator } from './query-operator';
export declare class ApiQueryOperator {
    name: QueryOperator;
    value: string;
    matches: Array<string>;
    constructor(name: QueryOperator, value: string, matches: Array<string>);
}
