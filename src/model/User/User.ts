export class User{
    name:string;
    private sosNumber: number;
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

}