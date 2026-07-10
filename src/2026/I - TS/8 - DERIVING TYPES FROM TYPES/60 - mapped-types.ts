// type Operations = {
//   add: (a: number, b: number) => number;
//   substract: (a: number, b: number) => number;
// };

// // type Results = {
// //     add: number,
// //     substract:number
// // }

// type Results<T> = {
//   [Key in keyof T]: number;
// };

// let mathOperations: Operations = {
//   add: (a: number, b: number) => a + b,
//   substract: (a: number, b: number) => a - b,
// };

// let mathResults: Results<Operations> = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(2, 1), // if this will be removed the mathResults will yield typecheck error - what if we want more flexibility! thats what we will see in read only types & optional mapping down
// };

// Readonly Types & Optional Mapping
// type Operations = {
//   readonly add: (a: number, b: number) => number;
//   readonly substract: (a: number, b: number) => number;
//   //   add?: (a: number, b: number) => number;
//   //   substract?: (a: number, b: number) => number;
// };

// // type Results = {
// //     add: number,
// //     substract:number
// // }

// type Results<T> = {
//   //   [Key in keyof T]?: number;
//   //   [Key in keyof T]-?: number;
//   //   readonly [Key in keyof T]?: number;
//   -readonly [Key in keyof T]?: number;
// };

// let mathOperations: Operations = {
//   add: (a: number, b: number) => a + b,
//   substract: (a: number, b: number) => a - b,
// };

// let mathResults: Results<Operations> = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(2, 1),
// };

// mathResults.add = 10;
