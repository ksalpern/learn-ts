"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
let cat = new Animal("Cat");
cat.move(10);
class Bird extends Animal {
    fly(distance = 0) {
        console.log(`${this.name} fly ${distance}m.`);
    }
}
