// TODO: 16 - Object Types

const person = {
  name: 'zack',
  age: 35,
};
// console.log(person.nickname); // .1

const person1: object = {
  // .3
  name: 'zack',
  age: 35,
};
console.log(person1);

// 4.
// const person2: {
//   name: string;
//   age: number;
// } = {
//   name: 'zack',
//   age: 35,
// };

// .5
const person2 = {
  name: 'zack',
  age: 35,
};
console.log(person2.name);

/**Object Types
 * 1. lint the error beacuse the object property does not exist
 * side notes:
 - if you hover on the object you see TS object-like key:property 
 * 3. we can assign the type to the object with object-type
 * 4. still not good practice
 * 5.better syntax
 */
