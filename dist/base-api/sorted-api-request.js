"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_request_1 = require("./api-request");
var SortedApiRequest = /** @class */ (function (_super) {
    tslib_1.__extends(SortedApiRequest, _super);
    function SortedApiRequest(sort) {
        var _this = _super.call(this) || this;
        _this.sort = sort;
        return _this;
    }
    // TODO: Make sort array so it supports multiple sorts (serverside already does)
    /**
     * Sets the sort of the ApiRequested with the specified property and direction.
     * Default direction is Ascending if none is provided.
     * Sending an undefined or null property will also clear the current sort.
     */
    SortedApiRequest.prototype.setSort = function (property, direction) {
        if (!direction) {
            this.sort = void 0;
        }
        else if (direction === 'desc') {
            this.sort = "-" + property;
        }
        else {
            this.sort = property;
        }
    };
    return SortedApiRequest;
}(api_request_1.ApiRequest));
exports.SortedApiRequest = SortedApiRequest;
//# sourceMappingURL=sorted-api-request.js.map