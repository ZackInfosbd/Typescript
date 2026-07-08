type Operations = {
  add: (a: number, b: number) => number;
  substract: (a: number, b: number) => number;
};

// type Results = {
//     add: number,
//     substract:number
// }

type Results<T> = {
  [Key in keyof T]: number;
};

let mathOperations: Operations = {
  add: (a: number, b: number) => a + b,
  substract: (a: number, b: number) => a - b,
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  substract: mathOperations.substract(2, 1),
};
