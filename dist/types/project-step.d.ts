import { Status } from './status';
import { ProjectDocument } from './project-document';
import { ProjectPermissions } from './project-permissions';
export declare class ProjectStep {
    _id: string;
    name: string;
    friendlyName: string;
    status: Status;
    documents: Array<ProjectDocument>;
    permissions: Array<ProjectPermissions>;
    constructor(name: string, friendlyName: string);
    isActivated(): boolean;
    /**
     * Returns true or false whether the step/user has the specified permissions.
     * @param permissions  - An array of permission to check for, a user/step must have all the specified permissions or it's false.
     */
    static hasPermission(projectStep: ProjectStep, ...permissions: ProjectPermissions[]): boolean;
}
