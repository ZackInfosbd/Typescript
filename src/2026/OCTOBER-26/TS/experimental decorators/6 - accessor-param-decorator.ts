// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log("Target", target);
//   console.log("Property Name", propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log("Accessor Target", target);
//   console.log("Accessor Name", name);
//   console.log("Accessor Descriptor", descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor,
// ) {
//   console.log("Method decorator!");
//   console.log("Method Target", target);
//   console.log("Method Name", name);
//   console.log("Method Descriptor", descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log("Parameter Target", target);
//   console.log("Parameter Name", name);
//   console.log("Parameter Position", position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive");
//     }
//   }

//   get price() {
//     return this._price;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
