class Circle {
    private static pi:number = 3.14;
    static circleArea:number = 0;


    static getArea(radius:number):number {
        return this.circleArea = radius * radius * Circle.pi;
    }

    static set area (pArea:number){
        Circle.circleArea = pArea;
    }

    static get area():number{
        return Circle.circleArea;
    }
}