// /**
//  * typeof and keyof.
//  * indexed access types & mapped types.
//  * conditional types.
//  * built-in utility types.
//  * more!
//  */

// type Operations = {
//   add: (a: number, b: number) => number;
//   substract: (a: number, b: number) => number;
// };

// let mathOperations: Operations = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   substract(a: number, b: number) {
//     return a - b;
//   },
// };
// // Base object type
// // type Results = {
// //   add: number;
// //   substract: number;
// // };

// // mapped type
// type Results<T> = {
//   [K in keyof T]: number;
// };

// let mathResults: Results<Operations> = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(8, 4),
// };
