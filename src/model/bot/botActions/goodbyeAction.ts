import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';

export class GoodbyeAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources, botFlowController)
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.goodbye;
    }
    execute(){
        this.botResources.getMessageList().push( new Message("Bye bye", true));
        this.notifyFinished();
        return null;
    }
}