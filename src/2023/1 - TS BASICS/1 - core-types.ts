// // TODO: 13
// // Typescript types VS javascript types

// function add0(n1: number, n2: number) {
//   // console.log(typeof n1);

//   // non TS check logic
//   // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//   //   throw new Error('incorrect input');
//   // }

//   return n1 + n2;
// }

// // const number1 = '5';
// const number1 = 5;
// const number2 = 2.8;

// const result = add0(number1, number2);
// console.log(result);

// // TODO: 14
// // CORE DATA TYPES in JS applied in TS
// // Working with Numbers, Strings and Booleans
// function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;

//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }

// const number3 = 5; // 5.0
// const number4 = 2.8;
// const printResult1 = true;
// const phraseResult1 = 'Result is: ';
// add1(number3, number4, printResult1, phraseResult1);

// // TODO: 15
// // Type Assignement and Type Inference
// function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;

//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }

// // TS Type Inference
// // let number1: number = 5; // .1
// let number5: number; // .2
// number5 = 5;
// // number1 = '5';

// const number6 = 2.8;
// const printResult2 = true;
// let phraseResult2;
// phraseResult2 = 'Result is: ';

// add2(number5, number6, printResult2, phraseResult2);

/**
 * 1. do not do it, TS use the type Inference from params to know the type
 * 2. it is good practice to assign type here because the value is not assigned to  variable
 * side notes :
    - if you hover on a variable declared with const it shows only the expression and its value
    - but if you hover on a varibale declared with let it shows the variable, its value and the type of value
 */
