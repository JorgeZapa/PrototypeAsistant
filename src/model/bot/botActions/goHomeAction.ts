import { Config } from "./../../../constants/config";
import { BotResources } from "./../botResources";
import { BaseBotAction } from "./baseBotAction";
import { RasaEvent } from "../../rasaPetition/rasaEvent";
export class GoHomeAction extends BaseBotAction {
  constructor(botResources: BotResources) {
    super(botResources);
  }

  execute(): RasaEvent {

    this.botResources
      .getLocationProvider()
      .retrieveHomeLocation()
      .subscribe(
        position => {
          if(position== null){
            super.sendBotMessage("I don't have your home poisition, i can't make you the route");
            return;
          }
          let coordinates = [
            position.coordinates.latitude,
            position.coordinates.longitude
          ];

          super.sendBotMessage("This will lead you to the route to get home");
          this.botResources
            .getLaunchNavigator()
            .navigate(coordinates)
            .catch(error => {
                console.log(error);
                super.sendBotMessage("I couldn't open the navigation, do you have google maps installed?");
            });
        },
        error => {
            console.log(error);
            super.sendBotMessage("I couldn't get your current location!");
        }
      );

    return null;
  }
  getRasaEncodingName(): string {
    return Config.rasaSupportedActions.go_home;
  }
}
