"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Document = /** @class */ (function () {
    function Document() {
        this.documentFiles = new Array();
        this.archived = false;
    }
    Document.prototype.getFile = function (type) {
        return this.documentFiles.find(function (fileMetaData) { return fileMetaData.fileExtension.toLowerCase() === type.toLowerCase(); });
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.js.map