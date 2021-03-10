"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_response_1 = require("./api-response");
var PagedApiResponse = /** @class */ (function (_super) {
    tslib_1.__extends(PagedApiResponse, _super);
    function PagedApiResponse(result, count) {
        var _this = _super.call(this, result) || this;
        _this.count = count;
        return _this;
    }
    return PagedApiResponse;
}(api_response_1.ApiResponse));
exports.PagedApiResponse = PagedApiResponse;
//# sourceMappingURL=paged-api-response.js.map