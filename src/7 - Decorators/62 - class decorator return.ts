// function WithTemplate(template: string, hookId: string) {
//   console.log('log from the decorator factory function!');
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     console.log('log from decaorator function itself!');

//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log('Rendering from the inherited/extended child class...');

//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person5 {
//   name = 'Zack';
//   constructor() {
//     console.log('create new person...');
//   }
// }

// // .1
// const person = new Person5();

/**
 * class decorators or methods decorators are able to return something, we are not talking here about the returned anonymous decorator function in the factory function but returning value inside the decorator function itself!!!
 *
 * lets say you want to return brand new class from the decorator function to...  ,so you need extend the constructor and assign the right types to each parameted located in that factory function decorator.

 * 1. => but when you return a class from decorator the decorator here will take a place and executes but the code loacted in class executes when you instantiate that class otherwise wont work.

=> Resume: 
in our last example we have seen how we returned a class that actually extends a constructor function ...well the class is just a syntaxic sugar for constructor function!!! there for the new class returned replace our original class/constructor function.
and siince super() is called inside the child class we save the original constructor function means everything we initialized inside the original class/copnstructor function still happens
 */
