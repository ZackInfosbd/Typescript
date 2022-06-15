// TODO: 20 - Working with Enums

// .1
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// .2
// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

const person = {
  name: 'zack',
  age: 35,
  hobbies: ['Sport', 'Cooking'],
  // role: ADMIN,
  role: Role.ADMIN,
};

// .1
// if (person.permission === ADMIN) {
//   console.log('the person is Admin');
// }

if (person.role === Role.ADMIN) {
  console.log('the user is an Admin');
}

/**
 * enum {NEW,OLD}
 * enum: are adde by TS automatically enumerated global constants identifiers which are human readable.
 * 1. we can work around in JS with variables like identifiers but it is long process which can be replaced by enums.
 * 2. you can choose the indexes of your enum values by assigning the values with starting indexes and the the values after will be automatically incremented, or assign the values with strings or even mix it numbers & strings
 */
