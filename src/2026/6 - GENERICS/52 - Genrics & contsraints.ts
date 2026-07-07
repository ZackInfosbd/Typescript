// function mergeObj(a: any, b: any) {
//   return { ...a, ...b };
// }

// const merged = mergeObj(1, 2);

// console.log(merged);

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'zach' }, { age: 39 });

console.log(merged);
