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

// function autobind(
//   target: (...args: any[]) => any,
//   ctx: ClassMethodDecoratorContext,
// ) {
//   ctx.addInitializer(function (this: any) {
//     this[ctx.name] = this[ctx.name].bind(this);
//   }); // arrow function wont work

//   return function (this: any) {
//     console.log('Executing original function');
//     target.apply(this);
//   };
// }

// function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
//   console.log(target);
//   console.log(ctx);

//   return (initialValue: any) => {
//     console.log(initialValue);
//     return '';
//   };
// }

// // Decorator factories

// function replacerField<T>(initValue: T) {
//   return function replacerDecorator(
//     target: undefined,
//     ctx: ClassFieldDecoratorContext,
//   ) {
//     console.log(target);
//     console.log(ctx);

//     return (initialValue: any) => {
//       console.log(`Hello from innier replacerField decorator`);

//       console.log(initialValue);
//       return initValue;
//     };
//   };
// }

// @logger
// class Person1 {
//   @fieldLogger
//   name = 'zach';

//   @replacerField(40)
//   age = 39;

//   @autobind
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }

//   @autobind
//   myAge() {
//     console.log('Hi, My age is: ' + this.age);
//   }
// }

// const zach = new Person1();
// const julie = new Person1();
// const max = new Person1();

// const greet = max.greet;
// greet();

// const age = max.myAge;
// age();
