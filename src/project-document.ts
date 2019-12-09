import { Document } from './document';
import { FileMetaData } from './file-meta-data';
import { User } from './user';
import { Status } from './status';

export class ProjectDocument extends Document {
    public authorCreate?: User;
    public authorLibrary?: User;
    public rfcNumber?: string;
    public status: Status = Status.notStarted;
    public attachments: Array<FileMetaData> = new Array<FileMetaData>();
}