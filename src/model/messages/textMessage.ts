import { Message } from "./message";

export class TextMessage extends Message {

    text: string;

    constructor(text: string, isBotMessage:boolean){
        super(isBotMessage);
        this.text=text;
    }
    getContent() {
        return this.text;
    }
}