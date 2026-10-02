// // /**
// //  * typeof and keyof.
// //  * indexed access types & mapped types.
// //  * conditional types.
// //  * built-in utility types.
// //  * more!
// //  */

// function add1(a: number, b: number) {
//   return a + b;
// }

// type AddFn1 = typeof add1;
// type ReturnValueType1<T> = T extends (...args: any[]) => infer RV
//   ? RV
//   : T | never;

// type AddFnReturnTypeValue = ReturnValueType1<AddFn1>;
