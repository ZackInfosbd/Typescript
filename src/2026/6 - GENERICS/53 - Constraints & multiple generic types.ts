function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'zach' }, { age: 39 });

console.log(merged);
