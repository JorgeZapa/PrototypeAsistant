import { MessageWrapperComponent } from './../components/message-wrapper/message-wrapper';
import { ChatPage } from './../pages/chat/chat';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation'
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RasaProvider } from '../providers/rasa/rasa';
import { EndpointsProvider } from '../providers/endpoints/endpoints';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';
import { LocalDataProvider } from '../providers/local-data/local-data';
import { LocationProvider } from '../providers/location/location';
import { SmsProvider } from '../providers/sms/sms';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage, 
    MessageWrapperComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RasaProvider,
    EndpointsProvider,
    UserProvider,
    LocalDataProvider,
    LocationProvider,
    Geolocation,
    SMS,
    SmsProvider

  ]
})
export class AppModule {}