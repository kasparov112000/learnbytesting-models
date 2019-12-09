import { Status } from './status';
import { ProjectDocument } from './project-document';
import { ProjectPermissions } from './project-permissions';

export class ProjectStep {
    public _id: string;
    public name: string;
    public friendlyName: string;
    public status: Status;
    public documents: Array<ProjectDocument> = new Array<ProjectDocument>();
    public permissions: Array<ProjectPermissions> = new Array<ProjectPermissions>();

    public get isActivated() {
        return this.status === Status.inProgress
            || this.status === Status.complete
            || this.documents.length > 0;
    }

    constructor(name: string, friendlyName: string) {
        this.name = name;
        this.friendlyName = friendlyName;
        this.status = Status.notStarted;
    }

    /**
     * Returns true or false whether the step/user has the specified permissions.
     * @param permissions  - An array of permission to check for, a user/step must have all the specified permissions or it's false.
     */
    public static hasPermission(projectStep: ProjectStep, ...permissions: ProjectPermissions[]): boolean {
        let stepHasPermission: boolean = true;

        for (let perm of permissions) {
            stepHasPermission = !!projectStep.permissions.includes(perm) && stepHasPermission;
        }

        return stepHasPermission;
    }
}