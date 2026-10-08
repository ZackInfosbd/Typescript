function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@Logger("LOGGING")
@WithTemplate("<h1>My Person Project</h1>", "app")
class Person {
  name = "zack";

  constructor() {
    console.log("Creating person object...");
  }
}

// const pers = new Person();
// console.log(pers);

// =========================

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log("Target", target);
  console.log("Property Name", propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  get price() {
    return this._price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const product1 = new Product("Book", 19);
console.log(product1.price);
product1.price = 10;
console.log(product1.price);
