"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_request_builder_1 = require("./api-request-builder");
var api_query_1 = require("./api-query");
var ApiRequest = /** @class */ (function () {
    function ApiRequest() {
        this.query = new Array();
    }
    ApiRequest.prototype.where = function (expression, parameters) {
        var queries = new api_request_builder_1.ApiRequestBuilder()
            .buildQueryFromExpression(expression.toString(), parameters);
        this.updateQueries(queries);
        return this;
    };
    ApiRequest.prototype.useQuery = function (name, value, queryOperator) {
        var apiQuery = new api_query_1.ApiQuery({
            name: name,
            value: value,
            apiQueryOperator: api_request_builder_1.ApiRequestBuilder.getByQueryOperator(queryOperator),
        });
        this.updateQueries([apiQuery]);
        return this;
    };
    // TODO: This will become a builder as well soon...  ie: request.orderBy(x => x.name)
    ApiRequest.prototype.orderBy = function (sort) {
        this.sort = sort;
        return this;
    };
    ApiRequest.prototype.clear = function (propertyName) {
        if (propertyName) {
            var index = this.query.map(function (q) { return q.name; }).indexOf(propertyName);
            if (index > -1) {
                this.query.splice(index, 1);
            }
        }
        else {
            this.query = new Array();
        }
    };
    ApiRequest.prototype.updateQueries = function (queries) {
        var _loop_1 = function (newQuery) {
            var existingQuery = this_1.query.find(function (apiQuery) { return apiQuery.name === newQuery.name; });
            if (existingQuery) {
                existingQuery.apiQueryOperator = newQuery.apiQueryOperator;
                existingQuery.value = newQuery.value;
            }
            else {
                this_1.query.push(newQuery);
            }
        };
        var this_1 = this;
        for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
            var newQuery = queries_1[_i];
            _loop_1(newQuery);
        }
    };
    return ApiRequest;
}());
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=api-request.js.map