import { Coordinates } from "@ionic-native/geolocation";

export class SimpleCoordinates{
    latitude: number;
    longitude: number;
    accuracy : number

    constructor(coordinates: Coordinates){
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
        this.accuracy = coordinates.accuracy;
    }
}