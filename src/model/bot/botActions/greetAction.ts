import { RasaSetSlotEvent } from './../../rasaPetition/Events/rasaSetSlotEvent';
import { RasaRestartEvent } from './../../rasaPetition/Events/rasaRestartEvent';
import { WelcomeFlowConfig } from './../botFlow/botFlowConfig/welcomeFlowConfig';
import { BotFlowController } from './../botFlow/botFlowController';
import { BotResources } from "./../botResources";
import { Config } from "./../../../constants/config";
import { BotAction } from "./botAction";
import { Message } from "../../message";
import { BaseBotAction } from "./baseBotAction";
import { User } from "../../User/User";

export class GreetAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.greet;
  }
  execute() {
    let loggedUser = this.botResources.getUserProvider().getLoggedUser();
    console.log(loggedUser);
    let resultingEvent = null;
    if (loggedUser.name == null) {
      this.welcome();
      this.botFlowController.setBotFlowConfig(new WelcomeFlowConfig());
    } else {
      this.usualGreetings(loggedUser);
      resultingEvent = new RasaRestartEvent();
    }
    this.notifyFinished();
    return resultingEvent;
  }

  welcome() {
    super.sendBotMessage("Welcome!");
    super.sendBotMessage("I am " + Config.botName + "!");
    super.sendBotMessage(
      "I am a bot specialized in help you remember things!!"
    );
    super.sendBotMessage("What is your name?");
  }

  usualGreetings(user: User) {
    super.sendBotMessage("Hello again, " + user.name + "!");
    super.sendBotMessage("How can i help you today?");
  }

}
