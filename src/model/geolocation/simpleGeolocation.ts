import { SimpleCoordinates } from './simpleCoordinates';
import { Geoposition } from '@ionic-native/geolocation';
export class SimpleGeoposition {

    coordinates: SimpleCoordinates;
    private timestamp: number;
    constructor(geoposition: Geoposition){
        this.coordinates= new SimpleCoordinates(geoposition.coords);
        this.timestamp = geoposition.timestamp; 
        
    }

}