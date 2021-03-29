export class Setting {
    public _id?: string;
    public createAvailable: boolean = true;
    public allowDownloadWordDocumentEnabled: boolean = false;
    public hideFooter: boolean = false;

    constructor(init?: { _id?: string, hideFooter?: boolean, createAvailable?: boolean, allowDownloadWordDocumentEnabled?: boolean }) {
        if(init) {
            this._id = init._id;
            this.createAvailable = init.createAvailable;
            this.allowDownloadWordDocumentEnabled = init.allowDownloadWordDocumentEnabled;
            this.hideFooter = init.hideFooter;
        }
    }
}