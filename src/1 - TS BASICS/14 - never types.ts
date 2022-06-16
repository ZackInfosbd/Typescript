// TODO: 30 - Working with 'never' type

// function generateError(message: string, code: number): never {
//   throw { message, error: code };
//   // .2
//   // infinit loop
// }
// // generateError('An error occureed', 500);

// // .1
// const result = generateError('An error occureed', 500);
// console.log(result);

/**
 * never type: never return something
 * 1. in our example we have assigned a function that return nothing and will never return something.
 * 2. infinite loop also never return a value
 */
