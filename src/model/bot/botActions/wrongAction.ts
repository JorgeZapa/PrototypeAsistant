import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from './botAction';
import { BaseBotAction } from './baseBotAction';
import { Message } from '../../message';
export class WrongAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    getRasaEncodingName(): string {
        return Config.builtInActions.wrong;
    }
    execute() {
        this.botResources.getMessageList().push(new Message("Sorry, i didn't understand you...", true));
        return null;
    }
}