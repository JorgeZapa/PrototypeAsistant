import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';

export class GiveLocationAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    execute() {
        this.botResources.getMessageList().push(new Message("Now we need to know your location", true));
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.location;
    }
    
    
}