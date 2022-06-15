// TODO: 23 - Working with literal types

function combined(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
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
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const numberResult = combined(5, 5, 'as-number');
const stringResult = combined('5', '5', 'as-number');
const combinedStringResult = combined('zack', 'kay', 'as-text');
console.log(numberResult);
console.log(stringResult);
console.log(combinedStringResult);

/**
 * Literal Types: are the exact values which are treated as types, likin within constants that wont be changed const number = 2.8 ==> const number: 2.8.
 */
