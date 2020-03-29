interface ICar {
    name : string;
    getStatus():string;
}
class MyCar {}

let mCar:ICar = {
    name:"Car",
    getStatus():string{
        return "ea";
    }
};
console.log(typeof mCar);