// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// console.log(merge({ name: 'zack' }, { age: 35 }));

// const mergeObj = merge({ name: 'zack' }, { age: 35 });
// mergeObj.

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'zack', hobbies: ['Sports'] }, { age: 35 }));
// const mergeObj = merge({ name: 'zack' }, { age: 35 });
// console.log(mergeObj.age);
// console.log(mergeObj.name);
// console.log(mergeObj);

// .3
// const mergeObj = merge({ name: 'zack' }, 35);
// console.log(mergeObj);

// .2
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'zack', hobbies: ['Sports'] }, { age: 35 }));

// const mergeObj = merge({ name: 'zack', hobbies: ['Sports'] }, { age: 35 });
// console.log(typeof mergeObj);

// .3
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // console.log(merge({ name: 'zack', hobbies: ['Sports'] }, 35));
// console.log(merge({ name: 'zack', hobbies: ['Sports'] }, { age: 35 }));

// const mergeObj = merge({ name: 'zack', hobbies: ['Sports'] }, { age: 35 });
// console.log(typeof mergeObj);
// console.log(mergeObj.age);

/**
 * in the last generic function we have passed extra types information to work in TS optimal way.
 * 2. we do not care about the the exact type of T and U but or about thier structure object (props types), but we care about one thing!!! we care about the object itself which should be object all the time with the help of extends keyword
 * 3. imagine we want by mistake merge parameter which is not of the type object, we can strict TS types checks with constraints => functionName<T extends type, U extends type>
 *
 */
