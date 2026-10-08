// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log("Target", target);
//   console.log("Property Name", propertyName);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

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

//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }
