import { ProjectDocument } from './project-document';
import { Category } from './category';
import { ProjectType } from './project-type';
import { Status } from './status';
import { ProjectSteps } from './project-steps';
import { User } from './user';
import { FileMetaData } from './file-meta-data';
import { ProjectPermissions } from './project-permissions';
export declare class Project {
    _id?: string;
    projectSteps: ProjectSteps;
    name: string;
    summary: string;
    details: string;
    author?: User;
    sdcAuthor?: User;
    status: Status;
    category?: Category;
    projectType: ProjectType;
    documents: Array<ProjectDocument>;
    attachments: Array<FileMetaData>;
    createdDate: Date;
    createdByGuid: String;
    modifiedDate: Date;
    permissions: Array<ProjectPermissions>;
    constructor();
}
