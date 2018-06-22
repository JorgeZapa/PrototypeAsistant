import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BaseBotAction } from './baseBotAction';
export class WrongAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources, botFlowController);
    }

    getRasaEncodingName(): string {
        return Config.builtInActions.wrong;
    }
    execute() {
        super.sendTextBotMessage("I didn't understand that");
        super.notifyFinished();
        return null;
    }
}