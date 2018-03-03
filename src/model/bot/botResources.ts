import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../message';
import { Content } from 'ionic-angular';
export class BotResources{

    private messageList: Array<Message>;
    private rasaProvider: RasaProvider;
    private content: Content;

    constructor(messageList: Array<Message>, rasaProvider: RasaProvider, content: Content){
        this.messageList = messageList;
        this.rasaProvider = rasaProvider;
        this.content = content;
    }

    getMessageList() :Array<Message>{
        return this.messageList;
    }

    getRasaProvider(){
        return this.rasaProvider;
    }

    getContent(){
        return this.content;
    }


}