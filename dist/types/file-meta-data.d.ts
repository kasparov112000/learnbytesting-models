import { FileType } from './file-type';
import { FileCategory } from './file-category';
export declare class FileMetaData {
    _id: string;
    externalId: string;
    fileName: string;
    fileExtension: string;
    content: string;
    fileType: FileType;
    fileCategory: FileCategory;
    size?: number;
    createdDate: Date;
    modifiedDate: Date;
    constructor(fileName?: string, fileExtension?: string, fileType?: FileType, fileCategory?: FileCategory, size?: number);
}
