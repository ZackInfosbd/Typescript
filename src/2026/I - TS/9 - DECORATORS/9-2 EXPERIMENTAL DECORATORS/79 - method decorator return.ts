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
//   descriptor: PropertyDescriptor,
// ) {
//   console.log('log from Method decorator');
//   console.log(target);
//   console.log(name);
//   console.log('Descriptor: ', descriptor);
//   // return {enumerable:'your code on this property}
// }

// class Product1 {
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

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };

//   return adjDescriptor;
// }

// class Printer {
//   message = 'This works!';

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector('button')!;
// // button.addEventListener('click', p.showMessage.bind(p));
// button.addEventListener('click', p.showMessage);

/**

 * ================================================================================================
 * we have used bind to show case that we can return logic from method decorator, we have used a decrotaor to access the constructor/prototype of the method, and manipulate the gettter get method within the newly created method decorator to bind object using class with the method it is related to, so we have used the getter get() method that works as a layer between the object and the method that is related to that object
 * 

 */
