// function logger(target: any, ctx: ClassDecoratorContext) {
//   console.log('logger decorator');
//   console.log(target);
//   console.log(ctx);
// }

// @logger
// class Person1 {
//   name = 'zach';

//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }

// A Class decorator thatedits a class
// function logger<T extends new (...args: any[]) => any>(
//   target: T,
//   ctx: ClassDecoratorContext,
// ) {
//   console.log('logger decorator');
//   console.log(target);
//   console.log(ctx);

//   return class extends target {
//     age = 35;
//   };
// }

// @logger
// class Person1 {
//   name = 'zach';

//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }

// const zach = new Person1();
// zach.greet();

// console.log(zach);

// Decorator execution order
// function logger<T extends new (...args: any[]) => any>(
//   target: T,
//   ctx: ClassDecoratorContext,
// ) {
//   console.log('logger decorator');
//   console.log(target);
//   console.log(ctx);

//   return class extends target {
//     constructor(...args: any[]) {
//       super(...args);
//       console.log('class constructor');
//       console.log(this);
//     }
//   };
// }

// @logger
// class Person1 {
//   name = 'zach';

//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }

// const zach = new Person1();
// const julie = new Person1();
