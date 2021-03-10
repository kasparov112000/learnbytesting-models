"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_query_operator_1 = require("./api-query-operator");
var query_operator_1 = require("./query-operator");
var api_query_1 = require("./api-query");
var ApiRequestBuilder = /** @class */ (function () {
    function ApiRequestBuilder() {
        /**
         * Gets the regular expression used to parse the lambda expression. ie:  x => x.firstName === value.firstName
         */
        this.expressionRegExp = new RegExp(/(.+[^=!><])(!={1,3}|<=|>=|>|<|={1,3})\s*(.+);\s*\}/);
        this.expressions = new Array();
        this.predicates = {
            or: '||',
            and: '&&',
            lambda: 'return ',
        };
        this.query = new Array();
    }
    /**
     * Returns an array of ApiQuery objects from the given expression and parameters.
     * @param expression - string representation of the expression to build the query for.
     * @param parameters - object with properties representing the parameters in the expression.
     */
    ApiRequestBuilder.prototype.buildQueryFromExpression = function (expression, parameters) {
        this.expressions = this.prepareExpression(expression.toString());
        this.buildQueryPredicate(parameters);
        return this.query;
    };
    ApiRequestBuilder.getOperator = function (value) {
        return ApiRequestBuilder.operators
            .find(function (operator) { return !!operator.matches.find(function (match) { return value === match; }); });
    };
    ApiRequestBuilder.getByQueryOperator = function (value) {
        return ApiRequestBuilder.operators
            .find(function (operator) { return operator.name === value; });
    };
    ApiRequestBuilder.prototype.prepareExpression = function (expression) {
        if (expression.includes(this.predicates.or)) {
            // TODO@zev.butler: Implement reading operators to support and, or, etc.
            throw new Error("The operator " + this.predicates.or + " (or) is not yet supported. Use && or write a custom query in the microservice.");
        }
        expression = expression.slice(expression.indexOf(this.predicates.lambda) + 6);
        return expression.split(this.predicates.and);
    };
    ApiRequestBuilder.prototype.buildQueryPredicate = function (parameters) {
        if (!this.expressions) {
            throw new Error('No expressions were found to build predicates from.');
        }
        for (var _i = 0, _a = this.expressions; _i < _a.length; _i++) {
            var predicate = _a[_i];
            var predicateMatch = this.expressionRegExp.exec(predicate);
            if (!predicateMatch || predicateMatch.length < 3) {
                throw new Error("Error in specified expression on: " + predicate);
            }
            var name_1 = this.parsePropertyName(predicateMatch[1]);
            var apiQueryOperator = this.parseOperator(predicateMatch[2]);
            var parameterName = this.parsePropertyName(predicateMatch[3]);
            var value = this.checkValueType(parameters, parameterName);
            if (value) {
                var query = new api_query_1.ApiQuery({
                    name: name_1,
                    value: value,
                    apiQueryOperator: apiQueryOperator
                });
                this.query.push(query);
            }
        }
    };
    ApiRequestBuilder.prototype.checkValueType = function (parameters, parameterName) {
        var value;
        if (parameterName.includes('.')) {
            var values = parameterName.split('.');
            var recursionValue = parameters;
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var propertyName = values_1[_i];
                recursionValue = recursionValue[propertyName];
            }
            value = recursionValue;
        }
        else {
            value = parameters[parameterName];
        }
        if (value instanceof Date) {
            return value.toLocaleString();
        }
        return value;
    };
    ApiRequestBuilder.prototype.parseOperator = function (providedOperator) {
        var matchedOperator = ApiRequestBuilder.getOperator(providedOperator);
        if (!matchedOperator) {
            throw new Error("The Operator provided '" + providedOperator + "' is invalid or not supported.");
        }
        return matchedOperator;
    };
    ApiRequestBuilder.prototype.parsePropertyName = function (value) {
        return value.slice(value.indexOf('.') + 1).trim();
    };
    ApiRequestBuilder.operators = [
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.equals, '=', ['==', '===']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.exists, 'exists', ['exists()']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.notEquals, '!=', ['!=', '!==']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.in, '=', []),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.notIn, '!=', []),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.greaterThan, '>', ['>']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.lessThan, '<', ['<']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.greaterThanEqualTo, '>=', ['>=']),
        new api_query_operator_1.ApiQueryOperator(query_operator_1.QueryOperator.lessThanEqualTo, '<=', ['<=']),
    ];
    return ApiRequestBuilder;
}());
exports.ApiRequestBuilder = ApiRequestBuilder;
//# sourceMappingURL=api-request-builder.js.map