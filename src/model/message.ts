
export class Message{
    content: string;
    isBotMessage: boolean;

    constructor(content: string, isBotMessage: boolean){
        this.content= content;
        this.isBotMessage = isBotMessage;
    }
}