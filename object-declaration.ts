class Rectangle {
     x:number;
    private y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    getArea(){
        return this.x + this.y;
    }
}

let rectangle = new Rectangle(1,5);





