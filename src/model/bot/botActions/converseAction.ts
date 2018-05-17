import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from "../../rasaPetition/Events/rasaEvent";
import { BotResources } from "../botResources";
import { BotFlowController } from "../botFlow/botFlowController";
import { Config } from "../../../constants/config";


export class ConverseAction extends BaseBotAction {

    text;

    constructor(botResources: BotResources, botFlowController: BotFlowController, text: string){
        super(botResources, botFlowController);
        this.text=text;
    }


    execute(): RasaEvent {

        let messages = this.botResources.getRiveProvider()
                                        .reply(this.text)
                                        .split("|");
        for(let message of messages){
            super.sendBotMessage(message);
        }

        super.notifyFinished();

        return null;
    }
    getRasaEncodingName(): string {
        return Config.builtInActions.converse;
    }
}