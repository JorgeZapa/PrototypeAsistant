import { BotFlowController } from './../botFlow/botFlowController';
import { RasaEvent } from "./../../rasaPetition/rasaEvent";
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";
import { Config } from "../../../constants/config";

export class NoNumberAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  execute(): RasaEvent {
    super.sendBotMessage("I can't get your number...");
    super.sendBotMessage("Can you repeat it again?");
    return null;
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.no_number;
  }
}
