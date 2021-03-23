import { FileMetaData } from './file-meta-data';
import { Category } from './category';
import { LookupItem } from './lookup-item';

export class Exam {
    public _id!: string;
    public name!: string;
    public lineOfService!: Category;
    public category!: Category;
    public createCreatedDate!: Date;
    public createdDate!: Date;
    public modifiedDate!: Date;
    public version!: string;
    public examFiles: Array<FileMetaData> = new Array<FileMetaData>();
    public createUuid!: string;
    public active!: boolean;
    public archived: boolean = false;

    public getFile(type: string): FileMetaData {
        return this.examFiles.find((fileMetaData) => fileMetaData.fileExtension.toLowerCase() === type.toLowerCase());
    }
}
