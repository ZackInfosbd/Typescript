// class Department {
//   id: number;
//   departmentName: string;
//   constructor(num: number, name: string) {
//     this.id = num;
//     this.departmentName = name;
//   }

//   describe(this: Department) {
//     console.log(
//       `Department number is: ${this.id}, which is under the name of ${this.departmentName}`
//     );
//   }
// }

// const department = new Department(1, 'IT');

// console.log(department);
// console.log(department.id);
// console.log(department.departmentName);

// department.describe();

// const AccountingDep = {
//   id: 2,
//   departmentName: 'Accounting',
//   describe: department.describe,
// };

// AccountingDep.describe();

/**
 * do not forget to use the keyword this while building your objects even with classes,otherwise the field:(property-later) will point to any global variable with that name
 * you can pass the kewyword this to a method as a param with type of the class name,that will help if you will assign that method later on to an other object, because you know the keyword this is so tricky.
 */
