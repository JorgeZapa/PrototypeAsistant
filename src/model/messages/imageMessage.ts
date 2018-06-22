import { Message } from "./message";

export class ImageMessage extends Message {

    private path: string;

    constructor(path: string, isBotMessage:boolean){
        super(isBotMessage);
        this.path=path;
    }
    getContent() {
        return this.path;
    }
}