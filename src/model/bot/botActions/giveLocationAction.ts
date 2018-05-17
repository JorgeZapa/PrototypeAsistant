import { DefaultFlowConfig } from './../botFlow/botFlowConfig/defaultFlowConfig';
import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from "./../../../constants/config";
import { BotResources } from "./../botResources";
import { BotAction } from "./botAction";
import { BaseBotAction } from "./baseBotAction";
import { Message } from "../../message";
import { User } from "../../User/User";

export class GiveLocationAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.location;
  }

  execute() {
    super.sendBotMessage(
      "Now i'll get your current location to help you get back when you get lost!"
    );
    super.sendBotMessage("If you allow me, of course");
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
          super.sendBotMessage("We are all set!");
          super.sendBotMessage("You can now tell me if you are lost, or if you want to get home or converse with me!");
        },
        error => {
          console.log(error);
          super.sendBotMessage(
            "Something went wrong getting your location."
          );
          super.sendBotMessage(
            "Tell me if you want to set again your location and i'll try it again!"
          );
          super.notifyFinished();
        }
      );
    return null;
  }
}
