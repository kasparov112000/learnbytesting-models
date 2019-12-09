import { ProjectDocument } from './project-document';
import { Category } from './category';
import { ProjectType } from './project-type';
import { Status } from './status';
import { ProjectSteps } from './project-steps';
import { User } from './user';
import { FileMetaData } from './file-meta-data';
import { ProjectPermissions } from './project-permissions';

export class Project {
    public _id?: string;
    public projectSteps: ProjectSteps = new ProjectSteps();
    public name: string;
    public summary: string;
    public details: string;
    public author?: User;
    public sdcAuthor?: User;
    public status: Status;
    public category?: Category;
    public projectType: ProjectType = new ProjectType('Change Template'); // TODO: HARD CODED FOR NOW
    public documents: Array<ProjectDocument> = new Array<ProjectDocument>();
    public attachments: Array<FileMetaData> = new Array<FileMetaData>();
    public createdDate: Date;
    public createdByGuid: String;
    public modifiedDate: Date;
    public permissions: Array<ProjectPermissions> = new Array<ProjectPermissions>();

    constructor() {
        this.status = Status.notStarted;
    }
}