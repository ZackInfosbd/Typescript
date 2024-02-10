// TODO: 27 - Functions as Types

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log('Result is: ' + num);
// }

// printResult(add(5, 12));

// // .3
// // let combineValues: Function;

// // .5
// let combineValues: (a: number, b: number) => number;

// // .1
// combineValues = add;

// // .2
// // combineValues = 5;

// // .4
// // combineValues = printResult;

// console.log(combineValues(8, 8));

/**
 * 1. we can assign a pointer to a function in a variable and then execute that variable
 * 2. we can re-assign that variable with a new value, that the bahvior  we dont want for example
 * 3. we have fixed .2 behavior with type of function.
 * 4. but we can re-assign with an other fnction but that function behave not as we want for excample in our example we have passed a function athat accepts one parameter
 * 5. fixes 4. explicitly assign TS type of funtion type with return of type number and accepts two params.
 */
