import { Observable } from 'rxjs/Observable';
import { UserProvider } from './../user/user';
import { SimpleCoordinates } from './../../model/geolocation/simpleCoordinates';
import { Config } from './../../constants/config';
import { Platform } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { LocationProvider } from './../location/location';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleGeoposition } from '../../model/geolocation/simpleGeolocation';

/*
  Generated class for the SmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmsProvider {

  constructor(private locationProvider: LocationProvider,
              private userProvider: UserProvider,
              private sms: SMS,
              private platform: Platform) {
  }


  sendSOSSMS(){
    this.locationProvider.getCurrentLocation().subscribe(location =>{
      let smsText = this.buildSMSMessage(location.coords);
      if(!this.isDevice()){
        console.log("Cannot send SMS, not a cordova device");
        console.log("Message would be:\n"+ smsText)
        return;
      }
      else{
        this.sms.send(String(this.userProvider.getLoggedUser().sosNumber),
                              smsText);
      }
      
    })
  }

  private buildSMSMessage( coord: SimpleCoordinates): string{
    return Config.templateSMSMessage.replace("{lat}",String(coord.latitude))
                                    .replace("{lon}", String(coord.longitude));
  }


  private isDevice(){
    return this.platform.is('cordova');
  }

}
