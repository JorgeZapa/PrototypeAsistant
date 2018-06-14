import { Config } from './../../../constants/config';
import { Alert } from 'ionic-angular';
import { RasaEvent } from './../../rasaPetition/Events/rasaEvent';
import { BotFlowController } from './../botFlow/botFlowController';
import { BotAction } from './botAction';
import { BotResources } from './../botResources';
import { Message } from '../../../model/messages/message';
import { ImageMessage } from '../../../model/messages/imageMessage';
import { TextMessage } from '../../../model/messages/textMessage';
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

    sendTextBotMessage(messageContent: string){
        this.botResources.getMessageList().push(new TextMessage(messageContent, true));
        setTimeout(() => this.botResources.getContent().scrollToBottom(300), 300);
    }

    sendImageBotMessage(imageName: string){
        this.botResources.getMessageList().push(new ImageMessage("assets/imgs/" + imageName, true));
        setTimeout(() => this.botResources.getContent().scrollToBottom(300), 300);
    }
    
    abstract getRasaEncodingName(): string;

    doBeforeParsing(messageContent: string, previousAction: BotAction){
        return null;
    }

    createConfirmAlert(title: string, message:string, functionOk: ()=> void, functionCancel: ()=>void): Alert{
        return this.botResources.getAlertController().create({
            title: title,
            message: message,
            buttons:[{
                text:"I don't want to",
                role: "cancel",
                handler: ()=>{
                    functionCancel();
                    this.notifyFinished();
                }
            },{
                text: "Yes",
                handler: () =>{
                    functionOk();
                }
            }
        ]
    })
    }

    notifyFinished(){
        this.botResources.getEvents().publish(Config.EventFinishProcessing.FINISH_PROCESSING);
    }

    getIntentName(){
        return this.getRasaEncodingName().substr(6);
    }
    
}