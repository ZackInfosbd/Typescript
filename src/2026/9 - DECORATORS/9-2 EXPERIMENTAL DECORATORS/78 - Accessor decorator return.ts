// // Accessor decorator
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('log from Accessor decorator');
//   console.log(target);
//   console.log(name);
//   console.log('Descriptor: ', descriptor);
//   // return {set:'your code on this property}
// }

// // method decorator
// function Log3(
//   target: any,
//   name: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('log from Method decorator');
//   console.log(target);
//   console.log(name);
//   console.log('Descriptor: ', descriptor);
//   // return {enumerable:'your code on this property}
// }

// class Product {
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
//   getPriceWithTax(tax: number) {
//     return this._price + (this._price * tax) / 100;
//   }
// }

/**
 * ================================================================================================
 * the decorators which return values and TS can use it are :
 * class decorators, 
 * accessors decorators
 * methods decorators
 * the decorators which return values and TS ignores it because returned values is not supported there or not precised,  are :
 * properties decorators, 
 * parameters decorators
 * ================================================================================================
 * with Accessor Decorators we can do for example: 
 * {get: undefined, enumerable: false, configurable: true, set: ƒ}
 - return a new descriptor which assigns a brand new set or other property located in descriptor object
 * ================================================================================================
 * with Method Decorators we can do for example: 
 * {get: undefined, enumerable: false, configurable: true, set: ƒ}
 - return a new descriptor which assigns a brand new  get method located in descriptor object

 */
