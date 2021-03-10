import { AuditLogUser } from "./audit-log-user";
import { AuditLogLevel } from './audit-log-level';
export declare class AuditLog {
    source: string;
    entityId: string;
    dateTime: Date;
    user: AuditLogUser;
    level: AuditLogLevel;
    details?: string;
    data?: Object;
    constructor(source: string, entityId: string, dateTime: Date, user: AuditLogUser, level: AuditLogLevel, details?: string, data?: Object);
}
