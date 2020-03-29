class Planet {
    public diameter:number;
    protected isTransduction : boolean;
    public feature : number;

    getIsTransduction():boolean{
        return this.isTransduction;
    }

    stopTransduction():void{
        console.log('stop planet');
        
        this.isTransduction = false;
    }
}

class Earth extends Planet{
    public ming:number;
    constructor(){
        super();
        this.feature = 3;

    }
    stopTransduction():void {
        console.log('stop earth');

        this.isTransduction = false;
    }
}

let earth:Planet = new Earth();

earth.stopTransduction();

console.log('feature : ',earth.feature);