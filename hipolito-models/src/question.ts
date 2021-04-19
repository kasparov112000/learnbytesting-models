import { FileMetaData } from './file-meta-data';
import { Category } from './category';
import { LookupItem } from './lookup-item';
import { Exam } from '.';
import { QuestionType } from './question-types';

export class Question {
    public _id!: string;
    public name!: string;
    public lineOfService?: Category;
    public category?: Category;
    public createdDate?: Date;
    public modifiedDate?: Date;
    public version?: string;
    public questionFiles?: Array<FileMetaData> = new Array<FileMetaData>();
    public active?: boolean;
    public archived?: boolean = false;
     type?: QuestionType;
     author?: string;
     track?: any;
     track2?: Question;
     title?: string;
     description?: string;
     answers?: string[];
     correctAnswer?: any;
     answered?: boolean;
     wasCorrect?: boolean;
     exams?: Exam[];
     __typename?: string;
     isFinal?: boolean;

    public getFile(type: string): FileMetaData {
        return this.questionFiles.find((fileMetaData) => fileMetaData.fileExtension.toLowerCase() === type.toLowerCase());
    }
}
