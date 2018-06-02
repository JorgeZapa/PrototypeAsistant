import { BotFlowConfig } from './botFlowConfig/botFlowConfig';
export interface BotFlowController{

   processUserMessage(message:string);

   welcome();

   setBotFlowConfig(botFlowConfig :BotFlowConfig);
   getBotFlowConfig():BotFlowConfig;
}