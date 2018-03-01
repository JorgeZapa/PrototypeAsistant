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
        this.botResources.getMessageList().push(new Message("Greetings", true));
    }
}