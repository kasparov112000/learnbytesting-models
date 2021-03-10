import { Document } from './document';
import { FileMetaData } from './file-meta-data';
import { User } from './user';
import { Status } from './status';
export declare class ProjectDocument extends Document {
    authorCreate?: User;
    authorLibrary?: User;
    rfcNumber?: string;
    status: Status;
    attachments: Array<FileMetaData>;
}
