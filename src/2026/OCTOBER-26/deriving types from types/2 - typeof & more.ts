// /**
//  * typeof and keyof.
//  * indexed access types & mapped types.
//  * conditional types.
//  * built-in utility types.
//  * more!
//  */

// const userName = "zack";
// console.log(typeof userName);

// type UserName = typeof userName; // store "zack" as a type not string because the inference is a constant.

// const settings = {
//   difficulty: "easy",
//   minLevel: 10,
//   didStart: false,
//   players: ["John", "Jane"],
// };

// // type Settings = {
// //   difficulty: string;
// //   minLevel: number;
// // }; // error prone and typos!

// type Settings = typeof settings;

// // function loadData(settings: Settings) {
// function loadData(s: typeof settings) {
//   // ...
// }

// loadData(settings);
