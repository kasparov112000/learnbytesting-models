import { QuestionType } from './question-type';

export class QuestionInfo {
    public entityId: string;
    public questionType: QuestionType;

    constructor(entityId: string, questionType: QuestionType) {
        this.entityId = entityId;
        this.questionType = questionType;
    }
}