"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.roles = new Array();
        this.linesOfService = new Array();
        this.userFavorites = new Array();
    }
    User.isInRoles = function (user) {
        var roleTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            roleTypes[_i - 1] = arguments[_i];
        }
        var userRoleTypes = user.roles.map(function (role) { return role.roleType; });
        for (var _a = 0, roleTypes_1 = roleTypes; _a < roleTypes_1.length; _a++) {
            var roleType = roleTypes_1[_a];
            if (userRoleTypes.includes(roleType)) {
                return true;
            }
        }
        return false;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map