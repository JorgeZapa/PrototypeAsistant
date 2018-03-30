import { RasaEvent } from './rasaEvent';
export class RasaRestartEvent implements RasaEvent {

    getPayload() {
        return {
            "event": "restart"
        }
    }
}