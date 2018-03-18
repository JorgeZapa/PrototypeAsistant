import { RasaEvent } from './../../rasaPetition/rasaEvent';
import { Config } from './../../../constants/config';
import { BotResources } from './../botResources';
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from '../../message';
import { RasaEvents } from '../../rasaPetition/rasaEvents';

export class GiveNumberAction extends BaseBotAction {

    private phoneNumber: number;

    constructor(botResources: BotResources, phoneNumber: number){
        super(botResources);
        this.phoneNumber=phoneNumber;
    }

    getRasaEncodingName(): string {
        return Config.rasaSupportedActions.give_number;
    }
    execute() {
        super.sendBotMessage("Interesting number!");
        this.botResources.getUserProvider().getLoggedUser().sosNumber=this.phoneNumber;
        this.botResources.getUserProvider().updateUser().subscribe(ok=>{},error=>{
            console.log(error);
            super.sendBotMessage("I couldn't save your data, when you come back i might not remember you...");
        });
        return new RasaEvent(RasaEvents.resetSlots);
    }
}