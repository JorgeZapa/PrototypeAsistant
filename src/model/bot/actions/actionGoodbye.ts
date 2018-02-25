import { Message } from './../../message';
import { Action } from "./action";

export class ActionGoodbye implements Action {
    execute() {
        return new Message("bye bye!", true);
    }
}