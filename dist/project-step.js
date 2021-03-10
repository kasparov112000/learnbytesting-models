"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = require("./status");
var ProjectStep = /** @class */ (function () {
    function ProjectStep(name, friendlyName) {
        this.documents = new Array();
        this.permissions = new Array();
        this.name = name;
        this.friendlyName = friendlyName;
        this.status = status_1.Status.notStarted;
    }
    ProjectStep.prototype.isActivated = function () {
        return this.status === status_1.Status.inProgress
            || this.status === status_1.Status.complete
            || this.documents.length > 0;
    };
    /**
     * Returns true or false whether the step/user has the specified permissions.
     * @param permissions  - An array of permission to check for, a user/step must have all the specified permissions or it's false.
     */
    ProjectStep.hasPermission = function (projectStep) {
        var permissions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            permissions[_i - 1] = arguments[_i];
        }
        var stepHasPermission = true;
        for (var _a = 0, permissions_1 = permissions; _a < permissions_1.length; _a++) {
            var perm = permissions_1[_a];
            stepHasPermission = !!projectStep.permissions.includes(perm) && stepHasPermission;
        }
        return stepHasPermission;
    };
    return ProjectStep;
}());
exports.ProjectStep = ProjectStep;
//# sourceMappingURL=project-step.js.map