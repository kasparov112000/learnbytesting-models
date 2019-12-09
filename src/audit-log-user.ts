export class AuditLogUser {
    public name: string;
    public guid?: string;

    constructor(name: string, guid?: string) {
        this.name = name;
        this.guid = guid;
    }
}