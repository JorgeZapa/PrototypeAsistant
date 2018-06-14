import { BotAction } from './botAction';
import { BotFlowController } from './../botFlow/botFlowController';
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';
import { RasaSetSlotEvent } from '../../rasaPetition/Events/rasaSetSlotEvent';
export interface BotAction{

    execute() : RasaEvent;
    getRasaEncodingName(): string;
    getIntentName(): string;
    getBotFlowController(): BotFlowController;
    doBeforeParsing(messageContent : string, previousAction : BotAction): RasaSetSlotEvent;
}