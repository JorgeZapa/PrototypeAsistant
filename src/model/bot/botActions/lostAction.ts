import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';

export class LostAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources, botFlowController);
    }

    execute(): RasaEvent {
        super.sendBotMessage("Sending SOS message...");
        let confirmAlert = super.createConfirmAlert("Send SMS", "I am about to send an SMS are you sure you want to send it?",
                    ()=>this.sendSOS(),()=>this.sendBotMessage("Okay i won't"))
        confirmAlert.present();
        
        return null;
    }

    private sendSOS(){
        this.botResources.getSmsProvider().sendSOSSMS() .finally(()=> this.notifyFinished()).subscribe(ok=>{
            super.sendBotMessage("SOS SENT!!!");
            super.sendBotMessage("Please don't move from there, "
                             + this.botResources.getUserProvider().getLoggedUser().name);
        }, error=>{
            console.log(error);
            super.sendBotMessage("I couldn't send the SMS, maybe you need to acept the permissions");
        });
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.lost;
    }
}