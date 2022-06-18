// function DecoFactory(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @DecoFactory('Logging-Person')
// class EntityPerson {
//   name = 'Zack';
//   constructor() {
//     console.log('create a new person...');
//   }
// }

/**
 * Decoratore factory: it is a function that return a decorator function
 * what for are Decoration Factory,because are more configurable,they could accept parameters to be passed to the class decorator like we have seen in nestjs @Get('product') => product router; with Factory Function we are able to customize value the decorator function uses when it executes
 */
