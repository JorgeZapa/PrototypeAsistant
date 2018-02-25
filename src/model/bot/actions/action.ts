import { Message } from './../../message';
export interface Action{

    execute(): Message;
}