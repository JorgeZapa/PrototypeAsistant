import { Observable } from "rxjs/Observable";
import { UserProvider } from "./../user/user";
import { SimpleCoordinates } from "./../../model/geolocation/simpleCoordinates";
import { Config } from "./../../constants/config";
import { Platform, Events } from "ionic-angular";
import { SMS } from "@ionic-native/sms";
import { LocationProvider } from "./../location/location";
import { Injectable } from "@angular/core";

/*
  Generated class for the SmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmsProvider {
  constructor(
    private locationProvider: LocationProvider,
    private userProvider: UserProvider,
    private sms: SMS,
    private platform: Platform,
    private events: Events
  ) {}

  sendSOSSMS(): Observable<void> {
    return new Observable<void>(subscriber => {
      this.locationProvider.getCurrentLocation().subscribe(
        location => {
          let smsText = this.buildSMSMessage(location.coords);
          if (!this.isDevice()) {
            console.log("Cannot send SMS, not a cordova device");
            console.log("Message would be:\n" + smsText);
            return;
          } else {
            let userNumber = this.userProvider.getCurrentUser().sosNumber;
            if (userNumber == null) {
              this.events.publish(
                Config.EventSend.SEND_BOT_MESSAGE,
                "I don't remember your SOS number..."
              );
              subscriber.complete();
              return;
            }
            this.sms
              .send(String(userNumber), smsText)
              .then(() => {
                subscriber.next();
                subscriber.complete();
              })
              .catch(error => {
                subscriber.error(error);
              });
          }
        },
        error => {
          subscriber.error(error);
        }
      );
    });
  }

  private buildSMSMessage(coord: Coordinates): string {
    return Config.templateSMSMessage
      .replace("{lat}", String(coord.latitude))
      .replace("{lon}", String(coord.longitude))
      .replace("{name}", this.userProvider.getCurrentUser().name);
  }

  private isDevice() {
    return this.platform.is("cordova");
  }
}
