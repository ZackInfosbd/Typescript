function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log('logger decorator');
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  };
}

// function autobind(target:Function,ctx:ClassMethodDecoratorContext){}
function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  console.log(target);
  console.log(ctx);
}

@logger
class Person1 {
  name = 'zach';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const zach = new Person1();
const julie = new Person1();
