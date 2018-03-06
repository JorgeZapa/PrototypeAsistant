import { Platform } from 'ionic-angular';
import { LocalDataProvider } from './../local-data/local-data';
import { Observable } from 'rxjs/Observable';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise'
import { Subscriber } from 'rxjs/Subscriber';
import { SimpleGeoposition } from '../../model/geolocation/simpleGeolocation';

@Injectable()
export class LocationProvider {

  constructor(private geolocation: Geolocation,
              private localDataProvider: LocalDataProvider,
              private platform: Platform) {
  }

  getCurrentLocation(): Observable<Geoposition>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<Geoposition>();
    }*/
    return fromPromise(this.geolocation.getCurrentPosition());
  }

  saveHomeLocation():Observable<void>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<void>();
    }*/
    return new Observable<void>(subscriber =>{
        this.getCurrentLocation().subscribe(geoposition =>{
          console.log("saveHomeLocation");
          console.log(new SimpleGeoposition(geoposition));
          this.localDataProvider.saveHomeLocation(new SimpleGeoposition(geoposition))
            .subscribe(res=>{
            console.log("savePosition ok");
            subscriber.complete();
          },
            error =>{
              console.log(error)
              subscriber.complete();
            });
            
                                                                  
    })
        })
  }

  retrieveHomeLocation():Observable<SimpleGeoposition>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<Geoposition>();
    }*/
    return new Observable<SimpleGeoposition>(subscriber =>{
      this.localDataProvider.getHomeLocation()
      .subscribe(homePosition=>{
        console.log("homePosition");
        console.log(homePosition);
        subscriber.next(homePosition);
        subscriber.complete();
      })
    });

  }

  /*distanceBetweenPositions(firstPosition:SimpleGeoposition,
                                      secondPosition:Geoposition): number{
    let lat1 = firstPosition.coordinates.latitude;
    let lat2 = secondPosition.coords.latitude;
    let long1 = firstPosition.coordinates.longitude;
    let long2 = secondPosition.coords.longitude;
    
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis*1000;
                                      }*/
    distanceBetweenPositions(firstPosition:SimpleGeoposition,
      secondPosition:Geoposition) {
        let lat1 = firstPosition.coordinates.latitude;
        let lat2 = secondPosition.coords.latitude;
        let lon1 = firstPosition.coordinates.longitude;
        let lon2 = secondPosition.coords.longitude;
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d*1000;
    }
    
    private deg2rad(deg) {
      return deg * (Math.PI/180)
    }

  private isDevice(){
    return this.platform.is('cordova');
  }

}
