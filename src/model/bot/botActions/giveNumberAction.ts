import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';

export class GiveNumberAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_number;
    }
    execute() {
        this.botResources.getMessageList().push(new Message("Thanks for the number!", true));
    }
}