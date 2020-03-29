interface IPerson {
    height:number;
    getAlias:()=>string;
    getAge():number;
}

class PoliceOfficer implements IPerson {
    height = 12;    
    
    getAlias = () => "happy";
    
    getAge(): number {
        return 10;
    }

    hasClub(){
        return true;
    }
}

let policeMan : IPerson = new PoliceOfficer();
console.log('policeMan : ',policeMan.getAlias());
console.log('police : ',policeMan.getAge() ,' height : ',policeMan.height);

