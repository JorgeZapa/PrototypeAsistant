import { BotFlowConfig } from './botFlowConfig/botFlowConfig';
export interface BotFlowController{

   processUserUtterance(utterance:string);

   welcome();

   setBotFlowConfig(botFlowConfig :BotFlowConfig);
   getBotFlowConfig():BotFlowConfig;
}