import { CreateDocument } from './create-document';

export class Branch {
    public belongs_to: Array<Branch | CreateDocument>;
    public name: string;
    public published: boolean;
    public uuid: string;
    public order: number;
    public question: string;
    public answer: string;
    public created: number;
    public _type: string;
    public _id: number;
    public title: string;
}