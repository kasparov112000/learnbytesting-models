"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiError = /** @class */ (function () {
    function ApiError(isError, exceptionMessage, details) {
        this.validationErrors = new Array();
        this.isError = isError;
        this.exceptionMessage = exceptionMessage;
        this.details = details;
    }
    return ApiError;
}());
exports.ApiError = ApiError;
//# sourceMappingURL=api-error.js.map