// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: 'zack', hobbies: ['Sport'] }, { age: 35 });
// console.log(mergeObj.age);
// console.log(mergeObj.name);
// console.log(mergeObj.hobbies[0]);

// interface lengthy {
//   length: number;
// }

// function countAndDescribe<T extends lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 element.';
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + ' elements';
//   }
//   return [element, descriptionText];
// }

// const element1 = 'Hi there!';

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe([]));
// console.log(countAndDescribe(['Sports', 'swimming']));

// .1
// console.log(countAndDescribe(10));

/**
 * 1. because number object does not have property length
 * with this approach we re trying to be a bit loosy about TS type checks we dont care much about the type of the element but we care about the property length which the object has
 */
