// function Log(target: any, propertyName: string) {
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

// class Product {
//   // property decorator
//   // @Log
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

/**

//  Accessor Decorator - are kinda methods - PropertyDescriptor is in common type
* the accessor decorator function parameter types:
 target =>  prototype if we are dealing with instance or => constructor function if we are dealing static one. 
 accessor name => string
 descriptor: PropertyDescriptor
 ================================================================================
//  Method Decorator - same almos like accessor decorator diff in descriptor
 * the method decorator function parameter types:
 target =>  prototype if we are dealing with instance or => constructor function if we are dealing static one. 
 method name => string
 descriptor: PropertyDescriptor
 ================================================================================
//  Parameter Decorator - exceutes before method decorator!!!
 * the parameter decorator function parameter types:
 target =>  prototype if we are dealing with instance or => constructor function if we are dealing static one. 
 method name => string
 parameter' position: number

=> PropertyDescriptor: allows you to define property more details
 for more infos about PropertyDescriptor check the documenetation

 */
