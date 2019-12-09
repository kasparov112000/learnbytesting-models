import { LookupItem } from './lookup-item';

export class ProjectType extends LookupItem {
    constructor(name?: string) {
        super();
        this.name = name;
    }
}