// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployeeType = Admin & Employee;

interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
}

interface ElevatedEmployeeType extends Admin, Employee {
  startDate: Date;
}

const user: ElevatedEmployeeType = {
  name: 'zack',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(user);
console.log(user.name);
console.log(user.privileges);
console.log(user.startDate);

type Combinable = symbol | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function getNumber(n: Universal) {
  return n;
}

console.log(getNumber('10'));
