// function Logger(cunstructor: Function) {
//   console.log('Logging...');
//   console.log(cunstructor);
// }

// @Logger
// class Person {
//   name = 'zack';
//   constructor() {
//     console.log('create new person...');
//   }
// }

/**
 *  * We Can Do Various Things With Decorators:
 * thats why there many frameworks like Angular or Nestjs which rely heavily on decorators. it is all about meta-programmimg, meand we dont use decorators often to have direct impact on the end-user but instead we use decorators to e.g get one of our classes to be used correctly or a method on a class or properties even params or we do some hidden transformation...
=================================================================================
 * decorators are just functions applied to classes and its citizens, decorators are suited feature for meta programming,decorators excutes when the class is defined not when the class is instantiated.
- TODO note:
- decorators dont run at the runtime when you call a method, or when you work with a property, this is not what they do, decorators allow you to do additional behind the scenes setup work when the class is defined!!

 * * Resume: what for mean by decoratror
 * => meta programming: we describe something need to be achieved seperately that has impact on the end user like rendering something on the screen, or helps targeting the routes like in nest js.
 * => thats ios like a tool which expose to other developers to be used when needed in libraries or inside other chuncks of our code....
 */
