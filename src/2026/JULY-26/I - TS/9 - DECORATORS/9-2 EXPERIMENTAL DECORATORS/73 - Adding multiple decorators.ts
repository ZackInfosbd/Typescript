// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }
// function WithTemplate2(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();

//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

// @Logger('LOGGING - PERSON')
// @WithTemplate2('<h1>My Person Object</h1>', 'app')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person2 {
//   name = 'zack';
//}
// }

/**
 * if we have multiple decorator attached to a class the order of execution is bottom up,means the closest one to the class and then farer and so on
 * => in our example @WithTemplate executes first and then @Logger we re talking about the actual decorator functions.
 * => the Factory Functions themselves executes earlier means before the decorators and the order of execution is normal by thier placement in the code up to bottom
 */
