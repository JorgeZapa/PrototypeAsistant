import { BotFlowController } from './../botFlow/botFlowController';
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";
import { Config } from "../../../constants/config";
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';
export class NoNameAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  execute(): RasaEvent {
    super.sendTextBotMessage("I didn't understand your name...");
    super.sendTextBotMessage("Can you repeat it again?");
    super.notifyFinished();
    return null;
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.no_name;
  }
}
