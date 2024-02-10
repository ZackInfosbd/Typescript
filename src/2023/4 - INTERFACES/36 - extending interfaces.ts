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
 * 1. with class you can inherit from one class only, with interfaces you can from multiple interfaces.
 
 * for example you can use the interface inheritance-extend when
you want for example split the typing checking with interfaces and dedicate one interface to an object/class and the other interface will implemented for an other object/class.
 */
