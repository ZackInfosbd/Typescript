let names: Array<string> = ['zack', 'kasia'];

// type DataStore = {
//   [key: string]: string | number;
// };

// store.name = 'Zack';

// // store.isInstructor = true
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = 'Zack';

store.isInstructor = true;

let nameStore: DataStore<string> = {};
