class Person {
  id: number;
  name: string;

  constructor(n: string, num: number) {
    this.id = num;
    this.name = n;
  }
}

const zack = new Person('zack', 36);

console.log(zack);
