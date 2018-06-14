import { RasaEvent } from './rasaEvent';
export class RasaSetSlotEvent implements RasaEvent {

    slotName : string;
    slotValue: string;

    constructor(slotName: string, slotValue: string){
        this.slotName = slotName;
        this.slotValue = slotValue;
    }

    getPayload() {
        return {
            "event": "slot",
            "name": this.slotName,
             "value": this.slotValue
        }
    }
}