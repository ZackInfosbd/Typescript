// type Combinable = string | number;

// // .2
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// // .1
// // const result = add('1', '5') as number;
// const result = add(1, 5);
// // result.split(' ');

// console.log(result);

/**
 * Function Overloads: A feature that allow us to define a multiple function signatures
 * 1. using cast typing wont help in this case
 * 2. we define Function Overloads
 */
