// /**
//  * typeof and keyof.
//  * indexed access types & mapped types.
//  * conditional types.
//  * built-in utility types.
//  * more!
//  */

// type User = { name: string; age: number };
// type UserKeys = keyof User;

// let validKey: UserKeys;

// validKey = "name";
// validKey = "age";

// function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
//   const val = obj[key];

//   if (val === undefined || val === null) {
//     throw new Error("Accessing undefined or null values");
//   }

//   return val;
// }

// const user = { name: "zack", age: 40 };
// const val = getProp(user, "age");
// console.log(val);

// const data = { id: 1, isStored: false, values: [1, -5, 10] };
// const valObj = getProp(data, "isStored");
// console.log(valObj);
