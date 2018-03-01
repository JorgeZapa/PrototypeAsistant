import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../message';
export class BotResources{

    private messageList: Array<Message>;
    private rasaProvider: RasaProvider

    constructor(messageList: Array<Message>, rasaProvider: RasaProvider){
        this.messageList = messageList;
        this.rasaProvider = rasaProvider;
    }

    getMessageList() :Array<Message>{
        return this.messageList;
    }

    getRasaProvider(){
        return this.rasaProvider;
    }


}