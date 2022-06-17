function Logger(cunstructor: Function) {
  console.log('Logging...');
  console.log(cunstructor);
}

@Logger
class Person {
  name = 'zack';
  constructor() {
    console.log('create new person...');
  }
}

/**
 * decorators are just functions applied to classes and are suited feature for meta programming,decorators excutes while the class is defined not when the class is instantiated
 */
