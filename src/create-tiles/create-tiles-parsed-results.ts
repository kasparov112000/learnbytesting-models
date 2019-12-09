import { Category } from '../category';
import { Document } from '../document';

export class CreateTilesParsedResults {
    public linesOfService: Array<Category> = new Array<Category>();
    public documents: Array<Document> = new Array<Document>();
}