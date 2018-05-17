import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';
import { User } from '../../User/User';

export class GiveNameAction extends BaseBotAction {

    name: string;

    constructor(botResources: BotResources, botFlowController: BotFlowController,name: string ){
        super(botResources, botFlowController);
        this.name=this.capitalizeFirstLetter(name);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_name;
    }

    execute() {
       super.sendBotMessage("Nice to meet you "+ this.name +"!");
       super.sendBotMessage("Now i need to know a number to call in case anything bad happens!");
       this.botResources.getUserProvider().getLoggedUser().name=this.name;
       super.notifyFinished();
       return null;
    }

    private capitalizeFirstLetter(string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}