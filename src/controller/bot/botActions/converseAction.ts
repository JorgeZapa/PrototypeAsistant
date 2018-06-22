import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from "../../rasaPetition/Events/rasaEvent";
import { BotResources } from "../botResources";
import { BotFlowController } from "../botFlow/botFlowController";
import { Config } from "../../../constants/config";


export class ConverseAction extends BaseBotAction {

    private userUtterance: string;

    constructor(botResources: BotResources, botFlowController: BotFlowController, userUtterance: string){
        super(botResources, botFlowController);
        this.userUtterance=userUtterance;
    }


    execute(): RasaEvent {

        let messages = this.botResources.getRiveProvider()
                                        .reply(this.userUtterance)
                                        .split("|");
        for(let message of messages){
            super.sendTextBotMessage(message);
        }

        super.notifyFinished();

        return null;
    }
    getRasaEncodingName(): string {
        return Config.builtInActions.converse;
    }
}