class Animal {
    constructor(name, weight) {
        this.name = 119;
    }
}
class Bird {
    constructor(speed) {
        this.name = 12;
    }
}
let animal = new Animal('happy', 100);
let bird = new Bird(10);
bird = animal;
console.log('animal name : ', bird.name);
