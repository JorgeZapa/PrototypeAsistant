import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../../model/messages/message';
import { User } from '../../../model/User/User';

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
       super.sendTextBotMessage("Nice to meet you "+ this.name +"!");
       super.sendTextBotMessage("Now i need to know a number to send a SOS to in case you get lost!");
       this.botResources.getUserProvider().getLoggedUser().name=this.name;
       super.notifyFinished();
       return null;
    }

    private capitalizeFirstLetter(string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}