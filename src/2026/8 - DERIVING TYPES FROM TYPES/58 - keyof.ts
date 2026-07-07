type User = { name: string; age: number };
type UserKeys = keyof User; // unlike typeof that should be followed by variable name, keyof should be followed by another type

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null values');
  }

  return val;
}

const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, 'isStored');

const user = { name: 'Max', age: 35 };
const val = getProp(user, 'age');
