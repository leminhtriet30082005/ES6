class People{
    PeopleName ="";
    PeopleBirday ="";
    ID ="";
    st ="";

    constructor( name , bir , id , TT ){
        this.PeopleName = name;
        this.PeopleBirday = bir;
        this.ID = id;
        this.st = TT;
    }

    getPeopleName(){
        return this.PeopleName;
    }
    getPeopleBirday(){
        return this.PeopleBirday;
    }
    getID(){
        return this.ID;
    }
    getst(){
        return this.st
    }
}
let people = new People("lmt","30/08","77","thich choi game");
console.log(
    "Ten: ",people.getPeopleName() + 
    ", sinh ngay: ",people.getPeopleBirday() + 
    ", ID: ",people.getID() +", so thich",people.getst())
);