import { AuditLogUser } from "./audit-log-user";
import { AuditLogLevel } from './audit-log-level';

export class AuditLog {
    public source: string;
    public entityId: string;
    public dateTime: Date;
    public user: AuditLogUser
    public level: AuditLogLevel;
    public details?: string;
    public data?: Object;

    constructor(source: string, entityId: string, dateTime: Date, user: AuditLogUser, level: AuditLogLevel, details?: string, data?: Object) {
        this.source = source;
        this.entityId = entityId;
        this.dateTime = dateTime;
        this.user = user;
        this.level = level;
        this.details = details;
        this.data = data;
    }
}