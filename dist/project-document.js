"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var document_1 = require("./document");
var status_1 = require("./status");
var ProjectDocument = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectDocument, _super);
    function ProjectDocument() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = status_1.Status.notStarted;
        _this.attachments = new Array();
        return _this;
    }
    return ProjectDocument;
}(document_1.Document));
exports.ProjectDocument = ProjectDocument;
//# sourceMappingURL=project-document.js.map