// type Admin = {
//   name: string;
//   priviliges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// interface Admin {
//   name: string;
//   priviliges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// // type ElevatedEmployess = Admin & Employee;

// interface ElevatedEmployess extends Admin, Employee {}

// const e1: ElevatedEmployess = {
//   name: 'zack',
//   priviliges: ['create-server'],
//   startDate: new Date(),
// };

// // .3 intersection union => number
// type Combinable = string | number;
// type Numeric = number | boolean;
// type universal = Combinable & Numeric;

/**
 * Typescript offers advanced types that can become handy in certain situations you migh be facing in projects.
 
 * Itersection types: allow us combine other types
 * 1. you can make the intersection type through:
 * making types with custom types/interfaces and third Custom type that combine them together with & and logic operator
 * or make two interfaces and third interface that extends them both
 * with intersection intersection union types could be preferable due to the ability that custom types can preserve union types and then combine them later on.
 * so intersection union = combination of different type => intersection union of the type in common

*  */
