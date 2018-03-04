import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';
import { User } from '../../User/User';

export class GiveNameAction extends BaseBotAction {

    name: string;

    constructor(botResources: BotResources,name: string ){
        super(botResources);
        this.name=name;
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_name;
    }

    execute() {
       super.sendBotMessage("Nice to meet you "+ this.name +"!");
       super.sendBotMessage("Now i need to know a number to call in case anything bad happens!");
       this.botResources.getUserProvider().getLoggedUser().setName(this.name);
       return null;
    }
}