import { Project } from './project';
import { MdrApplicationUser } from './mdr-application-user';

export class StepStrategyInformation {
    public project: Project;
    public documentIds?: Array<string> = new Array<string>();
    public error?: any;
    public user: MdrApplicationUser
}