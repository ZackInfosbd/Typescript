type TGender = 'MALE' | 'FEMALE';

interface IPerson {
  name: string;
  age: number;
  gender: TGender;
}

class Person implements IPerson {
  name: string;
  age: number;
  gender: TGender;

  constructor(n: string, age: number, g: TGender) {
    this.name = n;
    this.age = age;
    this.gender = g;
  }
}

class Female extends Person {
  constructor() {
    super('Jane', 20, 'FEMALE');
  }
}

class Male extends Person {
  constructor() {
    super('Joe', 30, 'MALE');
  }
}

class PersonFactory {
  static getPerson(gender: string): IPerson {
    if (gender === 'MALE') {
      return new Male();
    } else {
      return new Female();
    }
  }
}

const person1 = PersonFactory.getPerson('MALE');
const person2 = PersonFactory.getPerson('FEMALE');

console.log(person1);
console.log(person2);
