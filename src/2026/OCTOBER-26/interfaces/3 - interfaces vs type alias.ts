// /**
//  * interfaces or type aliases goal is the same.
//  * sometimes it comes down to personal preference, but there are some differences between the two.
//  * interfaces can be extended or implemented by other interfaces or classes.
//  * type aliases cannot be extended or implemented by other types or classes.
//  * interfaces can be merged, type aliases cannot be merged.
//  * interfaces are better for defining the shape of an object, while type aliases are better for defining a union or intersection of types.
//  */

// // type Authenticable = {
// //   email: string;
// //   password: string;
// //   login(): void;
// //   logout(): void;
// // };

// interface Authenticable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

// // declaration mergin
// interface Authenticable {
//   role: string;
// }

// let user: Authenticable;

// user = {
//   email: "",
//   password: "",
//   login() {
//     // reach out the database and check if the user exists, check creds and create a session
//   },
//   logout() {
//     // destroy the session and log the user out
//   },
//   role: "admin",
// };

// /**
//  * A lesser known but nonetheless interesting feature of TypeScript interfaces is that you
//  can also use them to define function types.
// For example, you might want to define the type of a sum function that takes two numbers as
// input and returns their sum.
//  */

// type SumFunc = (a: number, b: number) => number;

// let sum: SumFunc;

// sum = (a: number, b: number) => a + b;

// console.log(sum(1, 2)); // 3

// interface SumFunc2 {
//   (a: number, b: number): number;
// }

// let sum2: SumFunc2;

// sum2 = (a: number, b: number) => a + b;

// console.log(sum2(1, 2)); // 3

/**
 * It's up to you which alternative you prefer.
Typically, you'll encounter the first version (type SumFn) more often but
it's worth knowing about the alternative, too.
 */
