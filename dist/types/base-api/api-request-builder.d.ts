import { ApiQueryOperator } from './api-query-operator';
import { QueryOperator } from './query-operator';
import { ApiQuery } from './api-query';
export declare class ApiRequestBuilder {
    /**
     * Gets the regular expression used to parse the lambda expression. ie:  x => x.firstName === value.firstName
     */
    private expressionRegExp;
    private expressions;
    static readonly operators: Array<ApiQueryOperator>;
    readonly predicates: {
        or: string;
        and: string;
        lambda: string;
    };
    private query;
    /**
     * Returns an array of ApiQuery objects from the given expression and parameters.
     * @param expression - string representation of the expression to build the query for.
     * @param parameters - object with properties representing the parameters in the expression.
     */
    buildQueryFromExpression(expression: string, parameters?: any): Array<ApiQuery>;
    static getOperator(value: string): ApiQueryOperator;
    static getByQueryOperator(value: QueryOperator): ApiQueryOperator;
    private prepareExpression;
    private buildQueryPredicate;
    private checkValueType;
    private parseOperator;
    private parsePropertyName;
}
