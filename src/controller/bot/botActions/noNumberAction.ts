import { BotFlowController } from './../botFlow/botFlowController';
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";
import { Config } from "../../../constants/config";
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';

export class NoNumberAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  execute(): RasaEvent {
    super.sendTextBotMessage("I am not able to understand your SOS number...");
    super.sendTextBotMessage("May your repeat it again?");
    super.sendTextBotMessage("Maybe there was a mistake in it, remember that it contains 9 numbers (without spaces)");
    super.notifyFinished();
    return null;
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.no_number;
  }
}
