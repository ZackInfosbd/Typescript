// function Logger2(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

// // @Logger2('LOGGER-PERSON-FROM-FACTORY-FUNC-LOGGER')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class EntityPerson1 {
//   name = 'Zack';
//   constructor() {
//     console.log('create new person...');
//   }
// }

/**
 * if you want to ommit the constructor param inside the decorator function(anonymous funtion that hold the decorator function body) => we can use underscore(_)
 * ================
 * Resume: what for mean by decoratror
 * => meta programming: we describe something need to be achieved seperately that has impact on the end user like rendering something on the screen, or helps targeting the routes like in nest js.
 * => thats ios like a tool which expose to other developers to be used when needed in libraries or inside other chuncks of our code....
 */
