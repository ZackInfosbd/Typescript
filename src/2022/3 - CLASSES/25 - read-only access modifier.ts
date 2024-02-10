// class Department4 {
//   constructor(
//     private readonly id: number,
//     public name: string,
//     public employees: string[] = []
//   ) {}

//   describe(this: Department4) {
//     console.log(
//       `this Depeartment ${this.name}, which is under the number: ${this.id}`
//     );
//   }

//   printEmployeeInfos(employee: string) {
//     // this.id = 5; // .1
//     this.employees.push(employee);
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const management = new Department4(4, 'Management');
// management.describe();
// management.printEmployeeInfos('zack');
// management.printEmployeeInfos('kasia');

/**
 * 1. this field is read only
 */
