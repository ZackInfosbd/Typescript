function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'zakaria' }, { age: 40 });

console.log(mergedObject);
