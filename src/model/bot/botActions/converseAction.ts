import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from "../../rasaPetition/Events/rasaEvent";
import { BotResources } from "../botResources";
import { BotFlowController } from "../botFlow/botFlowController";
import { Config } from "../../../constants/config";

const RiveScript = require('rivescript');
const riveBot = new RiveScript();
export class ConverseAction extends BaseBotAction {

    text;

    constructor(botResources: BotResources, botFlowController: BotFlowController, text: string){
        super(botResources, botFlowController);
        this.text=text;
    }


    execute(): RasaEvent {
        
        riveBot.loadFile('assets/general_data.rive', ()=>{
            console.log("training data read")
            riveBot.sortReplies();
            var reply: string = riveBot.reply('local-user', this.text);

            var messages = reply.split(".");

            for(let message of messages){
                super.sendBotMessage(message);
            }

            super.notifyFinished();
        }  );

        return null;
    }
    getRasaEncodingName(): string {
        return Config.builtInActions.converse;
    }
}