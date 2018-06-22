import { DefaultFlowConfig } from './../botFlow/botFlowConfig/defaultFlowConfig';
import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from "./../../../constants/config";
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";

export class GiveLocationAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.location;
  }

  execute() {
    super.sendTextBotMessage(
      "Now i'll get your current location to help you get back when you get lost!"
    );
    this.botResources
      .getLocationProvider()
      .saveHomeLocation()
      .finally(() =>{
        this.getBotFlowController().setBotFlowConfig(new DefaultFlowConfig());
        super.notifyFinished();
      }
      )
      .subscribe(
        ok => {
          super.sendTextBotMessage("We are all set!");
          super.sendTextBotMessage("Want to know what i can do?")
          super.sendTextBotMessage("-> Change your home location");
          super.sendTextBotMessage("-> Show you the distance to your home location")
          super.sendTextBotMessage("-> Show you the route to your home location")
          super.sendTextBotMessage("-> Send an SOS numer to the number you registered if you get lost");
          super.sendTextBotMessage("Just let me know, now that we are all set...");
          super.sendTextBotMessage("Have you played any videogame today?");
        },
        error => {
          super.sendTextBotMessage(
            "Something went wrong getting your location."
          );
          super.sendTextBotMessage(
            "Tell me if you want to set again your location and i'll try it again!"
          );
          super.sendTextBotMessage("Otherwise i won't be able to help you if you are lost!");
          super.sendTextBotMessage("Have you played any videogame today?");
          super.notifyFinished();
        }
      );
    return null;
  }
}
