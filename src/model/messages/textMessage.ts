import { Message } from "./message";

export class TextMessage extends Message {

    private text: string;

    constructor(text: string, isBotMessage:boolean){
        super(isBotMessage);
        this.text=text;
    }
    getContent(): string {
        return this.text;
    }
}