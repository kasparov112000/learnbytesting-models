import { Project } from '../project';

export class ProjectStepActionRequest extends Project {
    public stepName: string;
    public projectDocumentIds?: Array<string>;

    constructor(init: { project: Project, stepName: string, projectDocumentIds?: Array<string> }) {
        super();
        Object.assign(this, init.project);
        this.stepName = init.stepName;
        this.projectDocumentIds = init.projectDocumentIds;
    }
}



