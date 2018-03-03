import { BotResources } from './../botResources';
import { Config } from './../../../constants/config';
import { BotAction } from "./botAction";
import { Message } from '../../message';
import { BaseBotAction } from './baseBotAction';

export class GreetAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }
    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.greet;
    }
    execute() {
        super.sendBotMessage("Welcome!");
        super.sendBotMessage("I am " + Config.botName + "!");
        super.sendBotMessage("I know how hard is to remember things when you are a little bit clueless");
        super.sendBotMessage("What is your name?");
        return null;
    }
}