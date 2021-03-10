"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var audit_log_level_1 = require("./audit-log-level");
var audit_log_level_property_1 = require("./audit-log-level-property");
var AuditLogLevelDisplay = {};
exports.AuditLogLevelDisplay = AuditLogLevelDisplay;
// ? Needs to come from Translations? 
// * In order to do translations, it would have to be initialized in the app like it is here. 
// * It's KIND of data so I'm not sure it needs to be translated.
AuditLogLevelDisplay[audit_log_level_1.AuditLogLevel.information] = new audit_log_level_property_1.AuditLogLevelProperty('Information');
AuditLogLevelDisplay[audit_log_level_1.AuditLogLevel.warning] = new audit_log_level_property_1.AuditLogLevelProperty('Warning');
AuditLogLevelDisplay[audit_log_level_1.AuditLogLevel.error] = new audit_log_level_property_1.AuditLogLevelProperty('Error');
//# sourceMappingURL=audit-log-level-display.js.map