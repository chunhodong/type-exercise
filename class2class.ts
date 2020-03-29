class Animal{
    name:number = 119;
    constructor(name:string,weight:number){}
}

class Bird{
    name:number = 12;

    constructor(speed:number){}
}

let animal:Animal = new Animal('happy',100);

let bird:Bird = new Bird(10);

bird = animal;

console.log('animal name : ',bird.name);
