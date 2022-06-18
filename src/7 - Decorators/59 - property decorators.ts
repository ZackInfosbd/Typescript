// function Log(target: any, propertyName: string) {
//   console.log('Property decorator');
//   console.log(target, propertyName);
// }

// class Product {
//   @Log
//   title: string;
//   description: string;
//   private _price: number;

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

//   getPriceWithTax(tax: number) {
//     return this._price + (this._price * tax) / 100;
//   }
// }

// const product = new Product('shoes', 'realxing for foot', 0);

// console.log(typeof product);
// console.log(product);
// const productPrice = product.getPriceWithTax(17);
// console.log(productPrice);

/**
 * where else we can add decorators?
 * 1 - Classes Decorators: which excutes when the class is defined =>befors instantiation of the class.
 * 2 - Property Decorators: are decorators attached to the class properties, with function decorator(not with factory function decorator), the function doesnt contain contsructor method because it is reserved to class decorators and it recives two parameters target and property name.
 * property decorator executes basically when the class definition is registered by JS => executes when you define the property that has the decorator
 */
