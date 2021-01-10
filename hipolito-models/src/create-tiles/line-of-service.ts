import { Branch } from './branch';
import { CreateDocument } from './create-document';

export class LineOfService {
    public abbr: string;
    public belongs_to: Array<Branch | CreateDocument>;
    public _type: string;
    public published: boolean;
    public uuid: string;
    public name: string;
    public _id: number;
    public order: number;
    public created: number;
    public question: string;
    public answer: string;
}