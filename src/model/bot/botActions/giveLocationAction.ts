import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';

export class GiveLocationAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.location;
    }

    execute() {
       super.sendBotMessage("Now i'll use my magic powers to get your location to help you get back when you get lost!");
       super.sendBotMessage("If you allow me, of course");
       return null;
    }
    
    
}