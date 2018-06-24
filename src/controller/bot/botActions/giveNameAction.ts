import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from "./baseBotAction";

export class GiveNameAction extends BaseBotAction {

    name: string;

    constructor(botResources: BotResources, botFlowController: BotFlowController,name: string ){
        super(botResources, botFlowController);
        this.name=this.capitalizeFirstLetterName(name);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_name;
    }

    execute() {
       super.sendTextBotMessage("Nice to meet you "+ this.name +"!");
       super.sendTextBotMessage("Now i need to know a number to send a SOS in case you get lost!");
       this.botResources.getUserProvider().getCurrentUser().name = this.name;
       super.notifyFinished();
       return null;
    }

    private capitalizeFirstLetterName(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}