class PoliceOfficer {
    constructor() {
        this.height = 12;
        this.getAlias = () => "happy";
    }
    getAge() {
        return 10;
    }
    hasClub() {
        return true;
    }
}
let policeMan = new PoliceOfficer();
console.log('policeMan : ', policeMan.getAlias());
console.log('police : ', policeMan.getAge(), ' height : ', policeMan.height);
