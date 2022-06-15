// TODO: 19 - Working with Tuples

// const person = {
//   name: 'zack',
//   age: 35,
//   hobbies: ['Sport', 'Cooking'],
//   role: [2, 'author'],
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'zack',
  age: 35,
  hobbies: ['Sport', 'Cooking'],
  role: [2, 'author'],
};

console.log(person.role);

person.role.push('admin');
// person.role[1] = 10; // .1
// person.role = [0,'admin','user'] // .2

console.log(person.role);

/**
 * Tuples :  [1,2] => are arrays with fixed length and fixed type
 * if we know that values of an array wont and shouldnt be changed, then we re dealing with tuples
 * 1. without assigning the type of role property which is of type array, the values can changed because throu TS Type Inference, it know that it is just an array means we can push more values or reassign some values which we do not want
 * solution ==> is to explicitly assign the type of the person object and then assign the type of role property to be converted to a tuple
 * side note: 
  - push works because TS cant catch it, but 
  * 2. but reassignment without push will be catched by TS
 */
