// class Department1 {
//   id: number;
//   name: string;
//   private employees: string[] = [];

//   constructor(num: number, n: string) {
//     this.id = num;
//     this.name = n;
//   }

//   describe(this: Department1) {
//     console.log(`this Department ${this.name} is under the number ${this.id}`);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// // const accounting = new Department1(1, 'Accounting');
// // console.log(accounting);
// // console.log(accounting.id);
// // console.log(accounting.name);
// // console.log(accounting.describe());

// // const humanResources = {
// //   id: 2,
// //   name: 'Human Resource',
// //   describe: accounting.describe,
// // };

// // humanResources.describe();

// const management = new Department1(3, 'Management');

// management.addEmployee('zack');
// management.addEmployee('kasia');

// // .1
// // management.employees[2] = 'Mansour';

// management.describe();
// management.printEmployeeInformation();

/**
 * 1. in TS we have access modifiers, which are keywords wich allow us to access the fields-properties or methods from outside of the class,by default the public keyword is setted to public but to restrict the access we could use private keyword infront of the property/method.
 */
