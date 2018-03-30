import { RasaEvent } from './../../rasaPetition/Events/rasaEvent';
import { BotFlowController } from './../botFlow/botFlowController';
import { BotAction } from './botAction';
import { BotResources } from './../botResources';
import { Message } from '../../message';
export abstract class BaseBotAction implements BotAction{

    botResources: BotResources;
    botFlowController: BotFlowController


    constructor(botResources: BotResources, botFlowController: BotFlowController){
        this.botResources = botResources;
        this.botFlowController = botFlowController;
    }

    getBotFlowController(): BotFlowController {
        return this.botFlowController;
    }

    abstract execute() :RasaEvent;

    sendBotMessage(messageContent: string){
        this.botResources.getMessageList().push(new Message(messageContent, true));
        setTimeout(() => this.botResources.getContent().scrollToBottom(300), 300);
    }
    
    abstract getRasaEncodingName(): string;

    doBeforeParsing(messageContent: string, previousAction: BotAction){
        return null;
    }
    
}