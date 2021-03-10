import { Project } from '../project';
export declare class ProjectStepActionRequest extends Project {
    stepName: string;
    projectDocumentIds?: Array<string>;
    constructor(init: {
        project: Project;
        stepName: string;
        projectDocumentIds?: Array<string>;
    });
}
