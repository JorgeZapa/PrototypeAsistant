import { botFlowControllerImpl } from './botFlow/botFlowControllerImpl';
import { BotFlowController } from './botFlow/botFlowController';
import { BotResources } from "./botResources";
import { Message } from "./../../model/messages/message";
import { Config } from "./../../constants/config";
export class Bot{
  private name = Config.botName;
  private flowController: BotFlowController;

  constructor(
    botResources: BotResources
  ) {
    this.flowController = new botFlowControllerImpl(
     botResources
    );
  }


  getName(){
    return this.name;
  }

  getFlowController(){
    return this.flowController;
  }



  readUserMessage(userMessage: Message) {
    this.flowController.processUserUtterance(userMessage.getContent());
  }

  welcomeUser() {
    this.flowController.welcome();
  }
}
