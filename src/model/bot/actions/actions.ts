import { Message } from './../../message';
import { Action } from "./action";

export namespace Actions{

    export class ActionGoodbye implements Action {
        execute() {
            return new Message("Hey there!", true);
        }
    }

    export class ActionGreet implements Action {
        constructor(){

        }
        execute() {
            return new Message ("bye bye!", true);
        }
}


}