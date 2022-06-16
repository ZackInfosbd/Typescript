// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// .1
// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user2: Person;
// user2 = {
//   name: 'Zack',
//   age: 35,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// TODO make class adhere to interface
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }

// let user2: Greetable;
// user2 = {
//   name: 'Zack',
//   greet(phrase: string) {
//     console.log("i'm from Person object: " + phrase + ' ' + this.name);
//   },
// };

// class Person implements Greetable {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string) {
//     console.log(`i'm from class Person: ${phrase} ${this.name}`);
//   }
// }

// console.log(user2.name);
// user2.greet('Hello there');

// const person1 = new Person('Zack');
// person1.greet('Hello there');

/**
 * 1.so why we use interface we can use custom type instead?
 * notes!!!:
 * well we can use custom tpes that contain union types for example or any other type, but interfaces are clearer more often you see interfaces describing the objects
 * you can implement interface in a class, also you would be able implement custom types,means that interface can be used as a cointract a class can implement then has to adhere to.
 * so we can say that interface can be used inside a class to force the class respects the type schema which the iinterface provides
 */
