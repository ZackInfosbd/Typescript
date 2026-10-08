function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T,
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

const pers = new Person();
console.log(pers);

// =========================

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log("Target", target);
  console.log("Property Name", propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log("Accessor Target", target);
  console.log("Accessor Name", name);
  console.log("Accessor Descriptor", descriptor);

  return;
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("Method decorator!");
  console.log("Method Target", target);
  console.log("Method Name", name);
  console.log("Method Descriptor", descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log("Parameter Target", target);
  console.log("Parameter Name", name);
  console.log("Parameter Position", position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log2
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const product1 = new Product("Book", 19);
console.log(product1.price);
product1.price = 10;
console.log(product1.price);

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage); // this does not work
// button.addEventListener("click", p.showMessage.bind(p));

button.addEventListener("click", p.showMessage);
