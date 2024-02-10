// // .1
// const addRestParam = (...numbers: number[]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0);
// };

// // .2
// const addRestParamTuple = (...numbers: [number, number, number]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0);
// };

// console.log(addRestParam(100, 200, 300));
// console.log(addRestParamTuple(100, 200, 300));

/**
 * 1. Rest parameter: it new ES6 feature, that accept unlimited amount of arguments
 * 2.rest param cant be an array of value of any type,nut if we know the amount of the params we can pass the tuple TS Type
 */
