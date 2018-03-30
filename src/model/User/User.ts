export class User{
    deviceId: string;
    name:string;
    sosNumber: number;
    //Localizacion

    constructor(){
    }

    setName(name: string){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setSosNumber(sosNumber: number){
        this.sosNumber=sosNumber;
    }
    getSosNumber(){
        return this.sosNumber;
    }

    setDeviceId(deviceId: string){
        this.deviceId=deviceId
    }
    getDeviceId(){
        return this.deviceId;
    }

}