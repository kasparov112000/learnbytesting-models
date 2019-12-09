import { ProjectDocument } from './project-document';
import { User } from './user';

export class ProjectDocumentAuditContext {
    public document: ProjectDocument;
    public message: string;

    constructor(document: ProjectDocument, message: string) {
        this.document = document;
        this.message = message;
    }
}