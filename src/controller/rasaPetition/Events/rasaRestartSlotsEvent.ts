import { RasaEvent } from './rasaEvent';
export class RasaRestartSlotsEvent implements RasaEvent {
    getPayload() {
        return {
            "event": "reset_slots"
        }
    }
}