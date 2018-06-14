import { RasaSetSlotEvent } from './../../rasaPetition/Events/rasaSetSlotEvent';
import { RasaRestartEvent } from './../../rasaPetition/Events/rasaRestartEvent';
import { WelcomeFlowConfig } from './../botFlow/botFlowConfig/welcomeFlowConfig';
import { BotFlowController } from './../botFlow/botFlowController';
import { BotResources } from "./../botResources";
import { Config } from "./../../../constants/config";
import { BotAction } from "./botAction";
import { Message } from "../../../model/messages/message";
import { BaseBotAction } from "./baseBotAction";
import { User } from "../../../model/User/User";

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
    super.sendTextBotMessage("Hey there!");
    super.sendTextBotMessage("I am " + Config.botName + "!");
    super.sendTextBotMessage(
      "i'm really into videogames, even though i am a chatbot!!"
    );
    super.sendTextBotMessage("What's your name?");
  }

  usualGreetings(user: User) {
    super.sendTextBotMessage("Hello again, " + user.name + "!");
    super.sendTextBotMessage("Let us talk about videogames!");
    super.sendTextBotMessage("Which videogame did you play today?");
  }

}
