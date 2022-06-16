// TODO 26 - Function return Type & void

// .1
// function addReturnNumber(num1: number, num2: number) {
//   return num1 + num2;
// }

// // .2
// function addReturnString(num1: number, num2: number) {
//   return num1.toString() + num2.toString();
// }

// // .3
// function addReturnNumberExpl(num1: number, num2: number): number {
//   return num1 + num2;
// }

// // .4
// function addReturnStringExpl(num1: number, num2: number): string {
//   return num1.toString() + num2.toString();
// }

// // .6
// function printResult(num: number) {
//   console.log('Result is: ' + num);
// }

// printResult(15);

// // .7
// console.log(printResult(addReturnNumber(15, 5)));

// // .8
// // function printResultUndefined(num: number): undefined {
// //   console.log('Result is: ' + num);
// // }
// // .9
// // let variableUndefine: undefined;

// // .10
// function printResultUndefined(num: number): void {
//   console.log('Result is: ' + num);
//   // or
//   return;
// }
// // .11
// function printUndefined(num: number): undefined {
//   console.log('result is' + num);
//   return;
// }

/**
 * 1. TS INFERS the return type to number because both params are of type number
 * 2. TS INFERS the return type to string because the parms has been converted into string
 * 3. explicit assign return type to number
 * 4. explicit assign return type to string
 * 1. and 2. are considered as best practices, let TS infers types
 * 6. funtion without return => type of return here is void
 * 7. result is undefined
 * 8. even if undefined is a typescript type but cant assign it to a function return as a type
 * 9. variable can recieve an undefined as type
 * 10. fix .8 with void return type if there is no return statement or there is return but doesnt return any value.
 * 11. fix .8 with undefined if there is a return statement but just to break and get out of the logic
 */
