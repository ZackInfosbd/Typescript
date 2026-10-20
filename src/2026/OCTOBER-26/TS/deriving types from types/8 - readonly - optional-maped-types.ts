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

// // mapped type
// type Results<T> = {
//   [K in keyof T]?: number;
// };

// let mathResults: Results<Operations> = {
//   add: mathOperations.add(1, 2),
//   //   substract: mathOperations.substract(8, 4),
// };

// // OR
// type Operations2 = {
//   add?: (a: number, b: number) => number;
//   substract?: (a: number, b: number) => number;
// };

// let mathOperations2: Operations2 = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   substract(a: number, b: number) {
//     return a - b;
//   },
// };

// // mapped type
// type Results2<T> = {
//   [K in keyof T]: number;
// };

// let mathResults2: Results2<Operations2> = {
//   add: mathOperations.add(1, 2),
//   //   substract: mathOperations.substract(8, 4),
// };

// // OR
// type Operations3 = {
//   add: (a: number, b: number) => number;
//   substract: (a: number, b: number) => number;
// };

// let mathOperations3: Operations3 = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   substract(a: number, b: number) {
//     return a - b;
//   },
// };

// // mapped type
// type Results3<T> = {
//   [K in keyof T]-?: number;
// };

// let mathResults3: Results3<Operations3> = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(8, 4),
// };

// // Read Only
// type Operations4 = {
//   add: (a: number, b: number) => number;
//   substract: (a: number, b: number) => number;

//   // OR

//   //   readonly add: (a: number, b: number) => number;
//   //   readonly substract: (a: number, b: number) => number;
// };

// let mathOperations4: Operations4 = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   substract(a: number, b: number) {
//     return a - b;
//   },
// };

// // mapped type
// type Results4<T> = {
//   // OR
//   readonly [K in keyof T]?: number;

//   // OR
//   //   - readonly [K in keyof T]?: number;
// };

// let mathResults4: Results4<Operations4> = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(8, 4),
// };

// // mathResults4.add = 10 // Cannot assign to 'add' because it is a read-only property.
