export declare class Category {
    _id?: string;
    name: string;
    parent?: string;
    children?: Category[];
    createCreatedDate: Date;
    createdDate: Date;
    modifiedDate: Date;
    createUuid: string;
    active: boolean;
    constructor(id?: string, name?: string);
}
