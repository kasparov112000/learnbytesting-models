"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectPermissions;
(function (ProjectPermissions) {
    ProjectPermissions["canAddDocument"] = "Can Add Document";
    ProjectPermissions["canAssignAuthor"] = "Can Assign Author";
    ProjectPermissions["canComplete"] = "Can Complete";
    ProjectPermissions["canDemote"] = "Can Demote";
    ProjectPermissions["canExpand"] = "Can Expand";
    ProjectPermissions["canMarkInProgress"] = "Can Mark In Progress";
    ProjectPermissions["canMarkNotStarted"] = "Can Mark Not Started";
    ProjectPermissions["canMarkPending"] = "Can Mark Pending";
    ProjectPermissions["canModify"] = "Can Modify";
    ProjectPermissions["canPromote"] = "Can Promote";
    ProjectPermissions["canUpdateRfc"] = "Can Update RFC#";
    ProjectPermissions["canUpload"] = "Can Upload";
})(ProjectPermissions = exports.ProjectPermissions || (exports.ProjectPermissions = {}));
(function (ProjectPermissions) {
    function all() {
        var excludes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            excludes[_i] = arguments[_i];
        }
        var permissions = [];
        for (var key in ProjectPermissions) {
            if (typeof ProjectPermissions[key] !== 'function' && !excludes.includes(ProjectPermissions[key])) {
                permissions.push(ProjectPermissions[key]);
            }
        }
        return permissions;
    }
    ProjectPermissions.all = all;
})(ProjectPermissions = exports.ProjectPermissions || (exports.ProjectPermissions = {}));
//# sourceMappingURL=project-permissions.js.map