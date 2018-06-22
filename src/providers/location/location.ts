import { LocalDataProvider } from './../local-data/local-data';
import { Observable } from 'rxjs/Observable';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { SimpleGeoposition } from '../../model/geolocation/simpleGeolocation';

@Injectable()
export class LocationProvider {

  constructor(private geolocation: Geolocation,
              private localDataProvider: LocalDataProvider) {
  }

  options={
    timeout:4000,
    enableHighAccuracy: true
  }

  getCurrentLocation(): Observable<Geoposition>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<Geoposition>();
    }*/
    return new Observable((subscriber)=>{
      this.geolocation.getCurrentPosition(this.options).then((res)=>{
        subscriber.next(res);
        subscriber.complete();
      },
    error=>{
      subscriber.error(error);
    })
      
    });
  }

  saveHomeLocation():Observable<void>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<void>();
    }*/
    return new Observable<void>(subscriber =>{
        this.getCurrentLocation().subscribe(geoposition =>{
          this.localDataProvider.saveHomeLocation(new SimpleGeoposition(geoposition))
            .subscribe(res=>{
            subscriber.next();
            subscriber.complete();
          },
            error =>{
              console.log(error)
              subscriber.error(error);
            });
            
                                                                  
    }, error =>{
      console.log(error);
      subscriber.error(error);
    })
        })
  }

  getHomeLocation():Observable<SimpleGeoposition>{
    /*if(!this.isDevice()){
      console.log("GEOLOCATION: you are on not on a device");
      return new Observable<Geoposition>();
    }*/
   return this.localDataProvider.getHomeLocation();

  }

  distanceBetweenPositions(firstPosition:SimpleGeoposition,
      secondPosition:Geoposition): number {
        //Haversine formula
        console.log(firstPosition.coordinates);
        console.log(secondPosition);
        let lat1 = firstPosition.coordinates.latitude;
        let lat2 = secondPosition.coords.latitude;
        let lon1 = firstPosition.coordinates.longitude;
        let lon2 = secondPosition.coords.longitude;
      var R = 6371;
      var dLat = this.deg2rad(lat2-lat1);
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      console.log(d);
      return d*1000;
    }
    
    private deg2rad(deg) {
      return deg * (Math.PI/180)
    }

}
