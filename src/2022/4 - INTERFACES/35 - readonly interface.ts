// interface Greetable {
//   readonly name: string;
//   greet(phrase: string): void;
// }

// class Person1 implements Greetable {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(`i'm from class Person: ${phrase} ${this.name}`);
//   }
// }

// const user1 = new Person1('Zack');

// console.log(user1.name);
// user1.name = 'james'; //.1

/**
 * readonly access modifier, is the only modifier that exists on both custom type and interface.
 * 1. throw error because property name is read only in interface
 */
