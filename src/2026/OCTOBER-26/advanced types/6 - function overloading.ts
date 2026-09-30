// /**
//  * Intersection Types.
//  * Type Guards.
//  * Descriminated Unions.
//  * Function Overloads.
//  * Index Types.
//  * Constant Types "as const".
//  * Record Types.
//  * Satisfies Keyword
//  */

// // Problem
// // function getLength(val: string | any[]) {
// //   if (typeof val === "string") {
// //     const numberOfWords = val.split("").length;
// //     return `${numberOfWords} words`;
// //   }

// //   return val.length;
// // }

// // const numOfWords = getLength("does this work?");
// // // numOfWords.length // here is the problem

// // const numOfItems = getLength(["Sports", "Cookies"]);

// // console.log(numOfWords);
// // console.log(numOfItems);

// function getLength(val: any[]): number;
// function getLength(val: string): string;
// function getLength(val: string | any[]) {
//   if (typeof val === "string") {
//     const numberOfWords = val.split(" ").length;
//     return `${numberOfWords} words`;
//   }

//   return val.length;
// }

// const numOfWords = getLength("does this work?");
// numOfWords.length;

// const numOfItems = getLength(["Sports", "Cookies"]);

// console.log(numOfWords);
// console.log(numOfItems);
