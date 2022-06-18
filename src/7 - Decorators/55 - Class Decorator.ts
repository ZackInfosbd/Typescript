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
 *  * We Can Do Various Things With Decorators:
 * thats why there many frameworks like Angular or Nestjs which rely heavily on decorators.
=================================================================================
 * decorators are just functions applied to classes and are suited feature for meta programming,decorators excutes while the class is defined not when the class is instantiated.
 * * Resume: what for mean by decoratror
 * => meta programming: we describe something need to be achieved seperately that has impact on the end user like rendering something on the screen, or helps targeting the routes like in nest js.
 * => thats ios like a tool which expose to other developers to be used when needed in libraries or inside other chuncks of our code....
 */
