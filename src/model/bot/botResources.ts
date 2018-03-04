import { UserProvider } from './../../providers/user/user';
import { RasaProvider } from './../../providers/rasa/rasa';
import { Message } from './../message';
import { Content } from 'ionic-angular';
export class BotResources{

    private messageList: Array<Message>;
    private rasaProvider: RasaProvider;
    private content: Content;
    private storage: Storage;
    private userProvider: UserProvider

    constructor(messageList: Array<Message>,
                rasaProvider: RasaProvider,
                content: Content,
                userProvider: UserProvider){
        this.messageList = messageList;
        this.rasaProvider = rasaProvider;
        this.content = content;
        this.userProvider = userProvider;
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

    getUserProvider(){
        return this.userProvider;
    }


}