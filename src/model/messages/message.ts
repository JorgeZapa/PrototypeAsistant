
export abstract class Message{
    private botMessage: boolean;

    constructor(botMessage: boolean){
        this.botMessage = botMessage;
    }

    isBotMessage(): boolean{
        return this.botMessage;
    }
    

    abstract getContent();
    
}