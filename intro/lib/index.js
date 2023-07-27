"use strict";
class Person {
    constructor(_age) {
        this._age = _age;
    }
    growOlder() {
        this._age++;
    }
    age() {
        return this._age;
    }
}
const person = new Person(1);
person.growOlder();
console.log(person.age()); // 2
