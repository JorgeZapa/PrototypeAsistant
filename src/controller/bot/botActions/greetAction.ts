import { RasaRestartEvent } from './../../rasaPetition/Events/rasaRestartEvent';
import { WelcomeFlowConfig } from './../botFlow/botFlowConfig/welcomeFlowConfig';
import { BotFlowController } from './../botFlow/botFlowController';
import { BotResources } from "./../botResources";
import { Config } from "./../../../constants/config";
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
    let currentUser = this.botResources.getUserProvider().getCurrentUser();
    let resultingEvent = null;
    console.log("username",currentUser.name);
    if (currentUser.name == null) {
      this.welcome();
      this.botFlowController.setBotFlowConfig(new WelcomeFlowConfig());
    } else {
      this.usualGreetings(currentUser);
      resultingEvent = new RasaRestartEvent();
    }
    this.notifyFinished();
    return resultingEvent;
  }

  private welcome() {
    super.sendTextBotMessage("Hey there!");
    super.sendTextBotMessage("I am " + Config.botName + "!");
    super.sendTextBotMessage(
      "i'm really into videogames, even though i am a chatbot!!"
    );
    super.sendTextBotMessage("What's your name?");
  }

  private usualGreetings(user: User) {
    super.sendTextBotMessage("Hello again, " + user.name + "!");
    super.sendTextBotMessage("Let us talk about videogames!");
    super.sendTextBotMessage("Which videogame did you play today?");
  }

}
