import { BotFlowConfig } from './botFlowConfig/botFlowConfig';
import { Message } from './../../message';
export interface BotFlowController{

   processUserMessage(message:string);

   welcome();

   setBotFlowConfig(botFlowConfig :BotFlowConfig);
   getBotFlowConfig():BotFlowConfig;
}