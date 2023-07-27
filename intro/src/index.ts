class Person {
    private _age: number;
    constructor(_age: number) {
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