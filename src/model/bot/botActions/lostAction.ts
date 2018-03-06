import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/rasaEvent';

export class LostAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    execute(): RasaEvent {
        super.sendBotMessage("Sending SOS message...");
        super.sendBotMessage("Please don't move from there, "
                             + this.botResources.getUserProvider().getLoggedUser().name);
        return null;
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.lost;
    }
}