"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuditLog = /** @class */ (function () {
    function AuditLog(source, entityId, dateTime, user, level, details, data) {
        this.source = source;
        this.entityId = entityId;
        this.dateTime = dateTime;
        this.user = user;
        this.level = level;
        this.details = details;
        this.data = data;
    }
    return AuditLog;
}());
exports.AuditLog = AuditLog;
//# sourceMappingURL=audit-log.js.map