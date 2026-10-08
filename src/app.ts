/**
 * What & Why.
 * Creating Class, Method & Property Decorators.
 * Decorator Factories.
 * Official Decorators vs Experimental Decorators.
 */

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("Class decorator");
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log("Executing original function");
    target.apply(this);
  };
}

function fieldDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log("Field decorator");
  console.log(target);
  console.log(ctx);

  return (initialValue: any) => {
    console.log(initialValue);
    return "";
  };
}

@logger
class Person {
  @fieldDecorator
  name = "Max";

  @autobind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const zack = new Person();
const greet = zack.greet;
greet();
