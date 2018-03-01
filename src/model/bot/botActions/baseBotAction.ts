import { BotAction } from './botAction';
import { BotResources } from './../botResources';
export abstract class BaseBotAction implements BotAction{

    botResources: BotResources;


    constructor(botResources: BotResources){
        this.botResources = botResources;
    }

    abstract execute();
    
    abstract getRasaEncodingName(): string;
    
}