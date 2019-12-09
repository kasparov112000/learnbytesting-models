import { QueryOperator } from './query-operator';

export class ApiQueryOperator {
    public name: QueryOperator;
    public value: string;
    public matches: Array<string> = new Array<string>();

    constructor(name: QueryOperator, value: string, matches: Array<string>) {
        this.name = name;
        this.value = value;
        this.matches = matches;
    }
}