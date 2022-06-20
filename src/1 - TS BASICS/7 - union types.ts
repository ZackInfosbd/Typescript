// TODO: 22 - Working with Union Type

// .1
// function combined(input1: number | string, input2: number | string) {
//   return input1 + input2;
// }

// .2
// function combined(
//   input1: number | string | boolean,
//   input2: number | string | boolean
// ) {
//   let result: number | string;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = +input1 + +input2;
//     return result;
//   } else {
//     result = input1.toString() + input2.toString();
//     return result;
//   }
// }

// const numberResult = combined(5, 5);
// const stringResult = combined('Jessica ', 'Alba');
// console.log(numberResult);
// console.log(stringResult);

/**
 * 1. in that function TS will lint an error because it says to what should the + here being applied number or string but the fact it is possible add number or concatenate a string.
 * 2. working around through using the runtime types check
 */
