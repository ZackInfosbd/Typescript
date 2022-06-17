// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// .1
// console.log(merge({ name: 'zack' }, { age: 35 }));

// .2
// const mergeObj = merge({ name: 'zack' }, { age: 35 });
// mergeObj.

// .3
// const mergeObj = merge({ name: 'zack' }, { age: 35 }) as {
//   name: string;
//   age: number;
// };

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: 'zack' }, { age: 35 });

// console.log(mergeObj.age);

/**
 * 1. works,
 * 2. problem is if assigning the function to variable even after mering objects, we can not access the one object props because typescript does not know which type it returns evenif it's object but what about the props they are of which types??? but we do not have much infos about the type that we can use to be able access the merged object properties
 * two Solution:
 * ============
 * 3. solution we use castinbg type but it is cumbersome and long
 * 4. create generics:
 * T & U : merge<{name:string},{age:number}>({ name: 'zack' }, { age: 35 }); we omit them because with T & U TS will be able to infere to the right types to confirme hove on the variable itself
 *
 */
