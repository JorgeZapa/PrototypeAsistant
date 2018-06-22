import { BotFlowController } from './../botFlow/botFlowController';
import { Config } from "./../../../constants/config";
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from '../../rasaPetition/Events/rasaEvent';
export class GoHomeAction extends BaseBotAction {
  constructor(botResources: BotResources, botFlowController: BotFlowController) {
    super(botResources, botFlowController);
  }

  execute(): RasaEvent {

    this.botResources
      .getLocationProvider()
      .getHomeLocation()
      .subscribe(
        position => {
          if(position== null){
            super.sendTextBotMessage("I don't have your home poisition, i can't make the route");
            super.sendTextBotMessage("Remember that you can ask to change your home location in order to set it again!");
            return;
          }
          let coordinates = [
            position.coordinates.latitude,
            position.coordinates.longitude
          ];
          
          super.sendTextBotMessage("I will open another application in your phone to show you the route");
          this.botResources
            .getLaunchNavigator()
            .navigate(coordinates)
            .catch(error => {
                console.log(error);
                super.sendTextBotMessage("I couldn't open the navigation, do you have google maps installed?");
            });
        },
        error => {
            console.log(error);
            super.sendTextBotMessage("I couldn't get your current location!");
        }
      );
      this.notifyFinished();
    return null;
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.go_home;
  }
}
