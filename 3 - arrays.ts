// TODO: 18 - Arrays Types

const person = {
  name: 'zack',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];

// favoriteActivities = ['Sports', 1];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // .1
  // console.log(hobby.map()); // .2
}

/**
 * 1. Typescript doesnt complain because TS knows that the property is of type string array.
 * 2. Typescript here complain because the map is applied only on arrays - hobby!!! not hobbies is other case
 */
