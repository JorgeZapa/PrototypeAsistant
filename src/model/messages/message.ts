
export abstract class Message{
    isBotMessage: boolean;

    constructor(isBotMessage: boolean){
        this.isBotMessage = isBotMessage;
    }

    abstract getContent();

    /*checkImage(content: string){
        if(content.endsWith(".jpg") && this.isBotMessage){
            this.content= "assets/imgs/" + content;
            this.isImage=true;
        }
      }*/
    
}