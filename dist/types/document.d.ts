import { FileMetaData } from './file-meta-data';
import { Category } from './category';
export declare class Document {
    _id: string;
    name: string;
    lineOfService: Category;
    category: Category;
    createCreatedDate: Date;
    createdDate: Date;
    modifiedDate: Date;
    version: string;
    documentFiles: Array<FileMetaData>;
    createUuid: string;
    active: boolean;
    archived: boolean;
    getFile(type: string): FileMetaData;
}
