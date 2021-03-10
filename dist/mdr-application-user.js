"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MdrApplicationUser = /** @class */ (function () {
    function MdrApplicationUser() {
    }
    MdrApplicationUser.isInRoles = function (user) {
        var roleTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            roleTypes[_i - 1] = arguments[_i];
        }
        var userRoleTypes = user.permissions.map(function (role) { return role.roleType; });
        for (var _a = 0, roleTypes_1 = roleTypes; _a < roleTypes_1.length; _a++) {
            var roleType = roleTypes_1[_a];
            if (userRoleTypes.includes(roleType)) {
                return true;
            }
        }
        return false;
    };
    return MdrApplicationUser;
}());
exports.MdrApplicationUser = MdrApplicationUser;
//# sourceMappingURL=mdr-application-user.js.map