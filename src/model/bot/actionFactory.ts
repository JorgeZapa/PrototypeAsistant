import { ChangeLocationAction } from './botActions/changeLocationAction';
import { BotFlowController } from './botFlow/botFlowController';
import { NoNameAction } from "./botActions/noNameAction";
import { NoNumberAction } from "./botActions/noNumberAction";
import { GoHomeAction } from "./botActions/goHomeAction";
import { DistanceAction } from "./botActions/distanceAction";
import { LostAction } from "./botActions/lostAction";
import { GiveLocationAction } from "./botActions/giveLocationAction";
import { BotAction } from "./botActions/botAction";
import { ListenAction } from "./botActions/listenAction";
import { GiveNumberAction } from "./botActions/giveNumberAction";
import { BotResources } from "./botResources";
import { GreetAction } from "./botActions/greetAction";
import { Config } from "./../../constants/config";
import { ActionResponse, Slots } from "./../rasaResponse/actionResponse";
import { GoodbyeAction } from "./botActions/goodbyeAction";
import { GiveNameAction } from "./botActions/giveNameAction";
import { WrongAction } from "./botActions/wrongAction";
export class ActionFactory {
  static createActionFromResponse(
    actionResponse: ActionResponse,
    botResources: BotResources,
    botFlowController: BotFlowController
  ): BotAction {
    console.log(actionResponse);
     return this.createActionFromName(actionResponse.next_action, botResources,botFlowController ,actionResponse.tracker.slots);
  }

  static createActionFromName(actionName: string, botResources: BotResources, botFlowController: BotFlowController, slots : Slots): BotAction{
    switch (actionName) {
      case Config.rasaSupportedActions.greet:
        return new GreetAction(botResources, botFlowController);
      case Config.rasaSupportedActions.goodbye:
        return new GoodbyeAction(botResources, botFlowController);
      case Config.rasaSupportedActions.give_name:
        return new GiveNameAction(
          botResources, botFlowController,slots.PERSON);
      case Config.rasaSupportedActions.no_name:
        return new NoNameAction(botResources, botFlowController);
      case Config.rasaSupportedActions.give_number:
        return new GiveNumberAction(
          botResources, botFlowController,slots.number);
      case Config.rasaSupportedActions.no_number:
        return new NoNumberAction(botResources, botFlowController);
      case Config.rasaSupportedActions.location:
        return new GiveLocationAction(botResources, botFlowController);
      case Config.rasaSupportedActions.lost:
        return new LostAction(botResources, botFlowController);
      case Config.rasaSupportedActions.distance:
        return new DistanceAction(botResources, botFlowController);
      case Config.rasaSupportedActions.go_home:
        return new GoHomeAction(botResources, botFlowController);
      case Config.builtInActions.wrong:
          return new WrongAction(botResources, botFlowController);
      case Config.rasaSupportedActions.listen:
        return new ListenAction(botResources, botFlowController);
      case Config.rasaSupportedActions.change_location:
        return new ChangeLocationAction(botResources, botFlowController);
    }
  }
}
