class Queue<T> {
  data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
   return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(3);
queue.push(2); // Error: Argument of type '"2"' is not assignable to parameter of type 'number'.
console.log(queue.pop().toPrecision(1)); // OK