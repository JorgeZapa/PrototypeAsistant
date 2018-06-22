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
        super.sendTextBotMessage("Sending SOS message...");
        let confirmAlert = super.createConfirmAlert("Send lost SMS", "I am about to send an SMS to the saved SOS number. Are you sure you want me to send it?",
                    ()=>this.sendSOS(),()=>this.sendTextBotMessage("Okay i won't send it"))
        confirmAlert.present();
        
        return null;
    }

    private sendSOS(){
        this.botResources.getSmsProvider().sendSOSSMS() .finally(()=> this.notifyFinished()).subscribe(ok=>{
            super.sendTextBotMessage("SOS SENT!!!");
            super.sendTextBotMessage("Please don't move from there, "
                             + this.botResources.getUserProvider().getCurrentUser().name);
        }, error=>{
            console.log(error);
            super.sendTextBotMessage("I couldn't send the SMS");
            super.sendTextBotMessage("Please try to call to the SOS number: " + this.botResources.getUserProvider().getCurrentUser().sosNumber);
        });
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.lost;
    }
}