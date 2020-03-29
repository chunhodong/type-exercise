abstract class AbstractBird {
    abstract birdName:string;
    abstract habitat:string;
    abstract flySound(sound:string);

    fly():void{
        this.flySound('padak padak');
    }

    getHabitate():void{

    }
}


class WildGoose extends AbstractBird{
    birdName: string;    
    habitat: string;
    
    flySound(sound: string) {
        throw new Error("Method not implemented.");
    }


}



