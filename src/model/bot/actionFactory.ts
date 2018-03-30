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
      case "utter_greet":
        return new GreetAction(botResources, botFlowController);
      case "utter_goodbye":
        return new GoodbyeAction(botResources, botFlowController);
      case "utter_give_name":
        return new GiveNameAction(
          botResources, botFlowController,slots.PERSON);
      case "utter_no_name":
        return new NoNameAction(botResources, botFlowController);
      case "utter_give_number":
        return new GiveNumberAction(
          botResources, botFlowController,slots.number);
      case "utter_no_number":
        return new NoNumberAction(botResources, botFlowController);
      case "utter_give_location":
        return new GiveLocationAction(botResources, botFlowController);
      case "utter_lost":
        return new LostAction(botResources, botFlowController);
      case "utter_distance":
        return new DistanceAction(botResources, botFlowController);
      case "utter_go_home":
        return new GoHomeAction(botResources, botFlowController);
      case "wrong":
          return new WrongAction(botResources, botFlowController);
      case "action_listen":
        return new ListenAction(botResources, botFlowController);
    }
  }
}
