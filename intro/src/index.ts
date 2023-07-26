class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

let cat = new Animal("Cat");
cat.move(10);

class Bird extends Animal {
  fly(distance: number = 0): void {
    console.log(`${this.name} fly ${distance}m.`);
  }
}
