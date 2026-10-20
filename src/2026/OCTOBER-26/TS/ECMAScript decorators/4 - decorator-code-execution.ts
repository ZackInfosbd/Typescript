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

// @logger
// class Person {
//   name = "Max";

//   greet() {
//     console.log("Hi, I am " + this.name);
//   }
// }

// const max = new Person();
// const julie = new Person();
