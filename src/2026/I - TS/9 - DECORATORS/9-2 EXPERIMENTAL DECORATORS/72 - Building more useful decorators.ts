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

//   constructor() {
//     console.log('creating a person object');
//   }
// }

// const pers = new Person2();

// console.log(pers);
