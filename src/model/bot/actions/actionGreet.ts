import { Message } from './../../message';
import { Action } from "./action";

export class ActionGreet implements Action {
    execute() {
        return new Message("Hiii!", true);
    }
}