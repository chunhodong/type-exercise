class Circle {
    static getArea(radius) {
        return this.circleArea = radius * radius * Circle.pi;
    }
    static set area(pArea) {
        Circle.circleArea = pArea;
    }
    static get area() {
        return Circle.circleArea;
    }
}
Circle.pi = 3.14;
Circle.circleArea = 0;
