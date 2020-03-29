class Planet {
    getIsTransduction() {
        return this.isTransduction;
    }
    stopTransduction() {
        console.log('stop planet');
        this.isTransduction = false;
    }
}
class Earth extends Planet {
    constructor() {
        super();
        this.feature = 3;
    }
    stopTransduction() {
        console.log('stop earth');
        this.isTransduction = false;
    }
}
let earth = new Earth();
earth.stopTransduction();
console.log('feature : ', earth.feature);
