import { Branch } from './branch';
import { CreateDocument } from './create-document';
export declare class LineOfService {
    abbr: string;
    belongs_to: Array<Branch | CreateDocument>;
    _type: string;
    published: boolean;
    uuid: string;
    name: string;
    _id: number;
    order: number;
    created: number;
    question: string;
    answer: string;
}
