// TODO: 24 - Working with Aliases/Custom Types

// .1
// function combined(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result: number | string;
//   if (
//     (typeof input1 === 'number' && typeof input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2;
//     return result;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
// }

// const numberResult = combined(5, 5, 'as-number');
// const stringResult = combined('5', '5', 'as-number');
// const combinedStringResult = combined('zack', 'kay', 'as-text');
// console.log(numberResult);
// console.log(stringResult);
// console.log(combinedStringResult);

// .2

type CustomType = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combined(
  input1: CustomType,
  input2: CustomType,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const numberResult = combined(5, 5, 'as-number');
const stringResult = combined('5', '5', 'as-number');
const combinedStringResult = combined('zack', 'kay', 'as-text');
console.log(numberResult);
console.log(stringResult);
console.log(combinedStringResult);

/**
 * Custom Types: can contain whatever type!
 * 1. the union  type is kinda repeated.
 * 2. we can wrap our union types inside a custom type and use it wherever needed
 */
