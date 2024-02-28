type TGender2 = 'MALE' | 'FEMALE';

interface IPerson2 {
  name: string;
  age: number;
  gender: TGender2;
}

class Person2 implements IPerson2 {
  name: string;
  age: number;
  gender: TGender;

  constructor(n: string, age: number, g: TGender2) {
    this.name = n;
    this.age = age;
    this.gender = g;
  }
}

class Female2 extends Person2 {
  constructor() {
    super('Jane', 20, 'FEMALE');
  }
}

class Male2 extends Person {
  constructor() {
    super('Joe', 30, 'MALE');
  }
}

class PersonFactory2 {
  static getPerson(gender: string): IPerson {
    if (gender === 'MALE') {
      return new Male();
    } else {
      return new Female();
    }
  }
}

const person12 = PersonFactory.getPerson('MALE');
const person22 = PersonFactory.getPerson('FEMALE');

console.log(person12);
console.log(person2);
