// function Logger2(logString: string) {
//   console.log('LOGGER Factory');

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');

//   return function (constructor: any) {
//     console.log('Rendering the HTML template');

//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

// @Logger2('LOGGER-PERSON-FROM-FACTORY-FUNC-LOGGER')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class EntityPerson1 {
//   name = 'Zack';
//   constructor() {
//     console.log('create new person...');
//   }
// }

/**
 * if we have multiple decorator attached to a class the order of execution is bottom up,means the closest one to the class and then farer and so on
 * => in our example @WithTemplate executes first and then @Logger we re talking about the actual decorator functions.
 * => the Factory Functions themselves executes earlier means before the decorators and the order of execution is normal by thier placement in the code up to bottom
 */
