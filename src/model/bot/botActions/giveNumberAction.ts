import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';

export class GiveNumberAction extends BaseBotAction {

    private phoneNumber: number;

    constructor(botResources: BotResources, phoneNumber: number){
        super(botResources);
        this.phoneNumber=phoneNumber;
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_number;
    }
    execute() {
        super.sendBotMessage("Interesting number!");
        return null;
    }
}