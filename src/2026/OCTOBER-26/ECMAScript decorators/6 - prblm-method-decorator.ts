// /**
//  * What & Why.
//  * Creating Class, Method & Property Decorators.
//  * Decorator Factories.
//  * Official Decorators vs Experimental Decorators.
//  */

// function logger<T extends new (...args: any[]) => any>(
//   target: T,
//   ctx: ClassDecoratorContext,
// ) {
//   console.log("logger decorator");
//   console.log(target);
//   console.log(ctx);

//   return class extends target {
//     constructor(...args: any[]) {
//       super(...args);
//       console.log("Class decorator");
//     }
//   };
// }

// function autobind(
//   target: (...args: any[]) => any,
//   ctx: ClassMethodDecoratorContext,
// ) {
//   console.log("autobind decorator");
//   console.log(target);
//   console.log(ctx);
// }

// @logger
// class Person {
//   name = "Max";

//   // 2 - solution
//   constructor() {
//     this.greet = this.greet.bind(this);
//   }

//   @autobind
//   greet() {
//     console.log("Hi, I am " + this.name);
//   }
// }

// const max = new Person();
// const greet = max.greet;
// max.greet(); // works because greet method is infered to be bound to the instance of the class
// // greet(); // does not work because greet method reference is not bound to the instance of the class, it is just a reference to the method itself.

// // 2 -
// greet();
