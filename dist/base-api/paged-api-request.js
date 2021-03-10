"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var sorted_api_request_1 = require("./sorted-api-request");
var PagedApiRequest = /** @class */ (function (_super) {
    tslib_1.__extends(PagedApiRequest, _super);
    function PagedApiRequest(sort, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 15; }
        var _this = _super.call(this, sort) || this;
        _this.page = page;
        _this.pageSize = pageSize;
        return _this;
    }
    return PagedApiRequest;
}(sorted_api_request_1.SortedApiRequest));
exports.PagedApiRequest = PagedApiRequest;
//# sourceMappingURL=paged-api-request.js.map