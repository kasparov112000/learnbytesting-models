"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var project_1 = require("../project");
var ProjectStepActionRequest = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectStepActionRequest, _super);
    function ProjectStepActionRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init.project);
        _this.stepName = init.stepName;
        _this.projectDocumentIds = init.projectDocumentIds;
        return _this;
    }
    return ProjectStepActionRequest;
}(project_1.Project));
exports.ProjectStepActionRequest = ProjectStepActionRequest;
//# sourceMappingURL=project-step-action-request.js.map