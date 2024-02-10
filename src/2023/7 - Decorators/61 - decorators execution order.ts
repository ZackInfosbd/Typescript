// function Log0(constructor: Function) {
//   console.log('class decorator');
//   console.log(constructor);
// }
// function Log1(target: any, propertyName: string) {
//   console.log('Property decorator');
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accesseor decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('Method decorator');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | symbol, position: number) {
//   console.log('Parameter decorator');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// @Log0
// class Product {
//   // property decorator
//   @Log1
//   title: string;
//   description: string;
//   private _price: number;

//   // accessor decorator
//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error(' invalid price - should be positive!');
//     }
//   }

//   constructor(t: string, desc: string, p: number) {
//     this.title = t;
//     this.description = desc;
//     this._price = p;
//   }

//   // method decorator
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price + (this._price * tax) / 100;
//   }
// }

// const product1 = new Product('product1', 'the first product', 123);
// const product2 = new Product('product2', 'the second product', 200);

// // 1.
// console.log(product1);
// console.log(product2);

/**
 * the decorators execution is the following:
 * 1. we have said that decorators execute when the class and its citizens definition in JS takes place, they just do not execute on the timem of instantiating the class!!!
 * ==================================================================================
 * the order of decorators execution is the following:
 * the order:
 * property decorator
 * accessor decorator
 * parameter decorator of the method
 * method decorator
 * class decorator
 * => means the class ciitzens decorators must execute first and then the class and it is logically implemented to excutes class decorators then the citizens and confighs should take place first.
 */
