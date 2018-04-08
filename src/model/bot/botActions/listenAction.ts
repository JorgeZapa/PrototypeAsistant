import { NoNameAction } from './noNameAction';
import { GreetAction } from './greetAction';
import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from './botAction';
import { BaseBotAction } from './baseBotAction';
import { RasaSetSlotEvent } from '../../rasaPetition/Events/rasaSetSlotEvent';
export class ListenAction extends BaseBotAction {

    constructor(botResources: BotResources, botFlowController: BotFlowController){
        super(botResources, botFlowController);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.listen;
    }
    execute() {
        console.log("listen");
        this.notifyFinished();
        return null;
    }

    doBeforeParsing(messageContent: string, previousAction: BotAction){
    let loggedUser = this.botResources.getUserProvider().getLoggedUser();
    if (loggedUser.name == null && messageContent.split(" ").length==1
            && (previousAction instanceof GreetAction || previousAction instanceof NoNameAction)) {
      return new RasaSetSlotEvent("PERSON",messageContent);
    }
    return null;

    }
}