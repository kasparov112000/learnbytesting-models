"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_type_1 = require("./project-type");
var status_1 = require("./status");
var project_steps_1 = require("./project-steps");
var Project = /** @class */ (function () {
    function Project() {
        this.projectSteps = new project_steps_1.ProjectSteps();
        this.projectType = new project_type_1.ProjectType('Change Template'); // TODO: HARD CODED FOR NOW
        this.documents = new Array();
        this.attachments = new Array();
        this.permissions = new Array();
        this.status = status_1.Status.notStarted;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map