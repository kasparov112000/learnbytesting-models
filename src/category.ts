import { Document } from './document';

export class Category {
    public _id?: string;
    public name: string;
    public parent?: string;
    public children? = new Array<Category>();
    public createCreatedDate: Date;
    public createdDate: Date;
    public modifiedDate: Date;
    public createUuid: string;
    public active: boolean;

    constructor(id?: string, name?: string) {
        this._id = id;
        this.name = name;
    }
}