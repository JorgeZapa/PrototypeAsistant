import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/rasaEvent';

export class LostAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources, botFlowController);
    }

    execute(): RasaEvent {
        super.sendBotMessage("Sending SOS message...");
        this.botResources.getSmsProvider().sendSOSSMS().subscribe(ok=>{
            super.sendBotMessage("SOS SENT!!!");
            super.sendBotMessage("Please don't move from there, "
                             + this.botResources.getUserProvider().getLoggedUser().name);
            
        }, error=>{
            console.log(error);
            super.sendBotMessage("I couldn't send the SMS, maybe you need to acept the permissions");
        });
        
        return null;
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.lost;
    }
}