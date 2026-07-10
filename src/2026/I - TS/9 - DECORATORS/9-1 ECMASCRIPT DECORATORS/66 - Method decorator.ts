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

// // function autobind(target:Function,ctx:ClassMethodDecoratorContext){}
// function autobind(
//   target: (...args: any[]) => any,
//   ctx: ClassMethodDecoratorContext,
// ) {
//   ctx.addInitializer(function (this: any) {
//     this[ctx.name] = this[ctx.name].bind(this);
//   }); // arrow function wont work

//   // 3 - Replacing Methods with decorators
//   return function (this: any) {
//     console.log('Executing original function');
//     target.apply(this);
//   };
// }

// @logger
// class Person1 {
//   name = 'zach';

//   // 1 - greet(). - autobind via constructor
//   //   constructor() {
//   //     this.greet = this.greet.bind(this);
//   //   }

//   @autobind
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// }

// const zach = new Person1();
// const julie = new Person1();
// const max = new Person1();

// const greet = max.greet();
// // 1 - greet()

// // 2 - Implementing a decorator based solution autobind

// // 3 - Replacing Methods with decorators
// // greet()
