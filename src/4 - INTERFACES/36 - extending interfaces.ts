// interface Named {
//   readonly name: string;
// }

// // .1
// // interface Greetable extends Named,interface2 {
// interface Greetable extends Named {
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

/**
 * we can implement inheritance with interfaces
 * 1. with class you can inherit fron class only, with interfaces you can from multiple interfaces
 * for example you can use the interface ing´heritance-extend when for example you have some classes contains some properties (interface = to be type checked ) and other not
 */
