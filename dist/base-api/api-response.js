"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_response_message_1 = require("./api-response-message");
var ApiResponse = /** @class */ (function () {
    function ApiResponse(result) {
        this.statusCode = 200;
        this.version = '1.0.0.0';
        this.message = api_response_message_1.ApiResponseMessage.success;
        this.result = result;
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.js.map