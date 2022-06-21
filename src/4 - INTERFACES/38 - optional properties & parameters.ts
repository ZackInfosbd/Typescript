// interface Named {
//   readonly name?: string;
//   outputName?: string; // .1
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name?: string;
//   age = 30;

//   constructor(n?: string) { //.2
//     if (n) {
//       this.name = n;
//     }
//   }

//   greet(phrase: string): void {
//     if (this.name) {
//       console.log(`${phrase} ${this.name}`);
//     } else {
//       console.log('Hi!');
//     }
//   }
// }

// const test1 = new Person();

// console.log(test1);
// test1.greet('salem aleykum');

/**
 * 1. you can make optional property in interfaces by adding '?'
 * 2. you can add both optional paramters and paramter in methods including (constructor method) in classes by adding question mark, or solve the issue with default parameter
 */
