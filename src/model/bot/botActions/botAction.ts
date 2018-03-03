import { RasaEvent } from './../../rasaPetition/rasaEvent';
export interface BotAction{
    execute() : RasaEvent;
    getRasaEncodingName(): string;
}