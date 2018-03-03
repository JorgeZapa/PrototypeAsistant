import { RasaEvent } from './../../rasaPetition/rasaEvent';
import { BotAction } from './botAction';
import { BotResources } from './../botResources';
import { Message } from '../../message';
export abstract class BaseBotAction implements BotAction{

    botResources: BotResources;


    constructor(botResources: BotResources){
        this.botResources = botResources;
    }

     abstract execute() :RasaEvent;

    sendBotMessage(messageContent: string){
        this.botResources.getMessageList().push(new Message(messageContent, true));
        this.botResources.getContent().scrollToBottom(300);
    }
    
    abstract getRasaEncodingName(): string;
    
}