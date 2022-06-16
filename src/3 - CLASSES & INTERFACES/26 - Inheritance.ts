// class Department5 {
//   private readonly id: number;
//   private name: string;
//   private employees: string[] = [];

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   describe(this: Department5) {
//     console.log(
//       `this Department is: ${this.name}, which is under the number ${this.id}`
//     );
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInfos() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// // .1
// // class ITDepartment extends Department5 {}

// class ITDepartment extends Department5 {
//   admins: string[];
//   constructor(id: number, public privileges: string[]) {
//     super(id, 'IT');
//     this.admins = privileges;
//   }
// }
// class AccountingDepartment extends Department5 {
//   reports: string[];
//   constructor(id: number, public rep: string[]) {
//     super(id, 'Accounting');
//     this.reports = rep;
//   }

//   addReport(report: string) {
//     this.reports.push(report);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const management = new Department5(1, 'Management');
// management.describe();
// management.addEmployee('Zack');
// management.addEmployee('Kasia');
// management.printEmployeeInfos();

// // .2
// // const itDep = new Department5(2, 'IT');

// // itDep.describe();

// const itDep = new ITDepartment(2, ['Baba']);
// console.log(itDep);
// console.log(itDep.admins);
// itDep.describe();
// itDep.addEmployee('Zack');
// itDep.addEmployee('Ayoub');
// itDep.addEmployee('Kaouther');
// itDep.addEmployee('Nour');
// itDep.addEmployee('Mansour');
// itDep.printEmployeeInfos();

// const accounting = new AccountingDepartment(2, ['Baba']);
// console.log(accounting);
// console.log(accounting.reports);
// accounting.describe();
// accounting.addEmployee('Zack');
// accounting.addEmployee('Ayoub');
// accounting.addEmployee('Kaouther');
// accounting.addEmployee('Nour');
// accounting.addEmployee('Mansour');
// accounting.printEmployeeInfos();
// accounting.addReport('something went wrong');
// accounting.printReports();

/**
 * extends: a keyword for inheritance from other classes
 * 1. we can take instance of parent class and inherit from even with syntax like this class ITDepartment extends Department5 {}.
 * 2. we extended from the parent class but to fix some fields like in our example with name department because the name wont be changed and it will be fixed then we fix it with the keyword super(), super() calls the constructor of parent class
 */
