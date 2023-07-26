"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new Queue();
queue.push(3);
queue.push(2); // Error: Argument of type '"2"' is not assignable to parameter of type 'number'.
console.log(queue.pop().toPrecision(1)); // OK
