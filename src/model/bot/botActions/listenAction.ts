import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from './botAction';
import { BaseBotAction } from './baseBotAction';
export class ListenAction extends BaseBotAction {

    constructor(botResources: BotResources){
        super(botResources);
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.listen;
    }
    execute() {
        console.log("listen");
        //Desbloquear el text input.
    }
}