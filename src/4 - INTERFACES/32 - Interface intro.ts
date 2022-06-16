interface Person {
  // name: string = 'Zack'; // .1
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: 'Zack',
  age: 35,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

console.log(user1.name);
console.log(user1.age);
user1.greet('Hello there');

/**
 * Interface: describe the structure of an object, it wont be used as class however, but just as a custom TS Type we could say
 * 1. you can not assign the properties!!!
 */
