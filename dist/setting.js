"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Setting = /** @class */ (function () {
    function Setting(init) {
        this.createAvailable = true;
        this.allowDownloadWordDocumentEnabled = false;
        if (init) {
            this._id = init._id;
            this.createAvailable = init.createAvailable;
            this.allowDownloadWordDocumentEnabled = init.allowDownloadWordDocumentEnabled;
        }
    }
    return Setting;
}());
exports.Setting = Setting;
//# sourceMappingURL=setting.js.map