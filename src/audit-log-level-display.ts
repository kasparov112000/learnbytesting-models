import { AuditLogLevel } from './audit-log-level';
import { AuditLogLevelProperty } from './audit-log-level-property';

const AuditLogLevelDisplay: { [ index: number ]: AuditLogLevelProperty} = {};

// ? Needs to come from Translations? 
// * In order to do translations, it would have to be initialized in the app like it is here. 
// * It's KIND of data so I'm not sure it needs to be translated.

AuditLogLevelDisplay[AuditLogLevel.information] = new AuditLogLevelProperty('Information'); 
AuditLogLevelDisplay[AuditLogLevel.warning]     = new AuditLogLevelProperty('Warning');
AuditLogLevelDisplay[AuditLogLevel.error]       = new AuditLogLevelProperty('Error');

export { AuditLogLevelDisplay };