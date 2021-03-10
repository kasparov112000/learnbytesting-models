import { CreateDocument } from './create-document';
export declare class Branch {
    belongs_to: Array<Branch | CreateDocument>;
    name: string;
    published: boolean;
    uuid: string;
    order: number;
    question: string;
    answer: string;
    created: number;
    _type: string;
    _id: number;
    title: string;
}
