// class Department {
//   constructor(
//     private readonly id: number,
//     protected name: string,
//     private employees: string[]
//   ) {}

//   describe(this: Department) {
//     console.log(`Department ${this.id} ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//     console.log(`the new added employee is: ${employee} `);
//   }

//   printEmployeeInformations(this: Department) {
//     console.log(
//       `The number of the employees of ${this.name} is: ${this.employees.length}`
//     );
//   }
// }

// const accountinfDepartment = new Department(1, 'Accounting', []);

// accountinfDepartment.addEmployee('Zack');

// accountinfDepartment.describe();

// accountinfDepartment.printEmployeeInformations();

// class ITDepartment extends Department {
//   constructor(
//     id: number,
//     private admins: string[],
//     private reports: string[],
//     private lastReport: string = reports[0]
//   ) {
//     super(id, 'IT', []);
//   }

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('NO Report found!');
//   }

//   set mostRecentReport(value: string) {
//     if (!value) throw new Error('please pass in a valid value');
//     this.addReport(value);
//   }

//   addAdmins(admin: string) {
//     this.admins.push(admin);
//     console.log(`the new added admin is: ${admin}`);
//   }

//   getAdmins() {
//     console.log(
//       `the number of admins in this department is: ${this.admins.length}`
//     );
//   }

//   getDepartmentName() {
//     console.log(`this is the name : ${this.name}`);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   getReports() {
//     console.log(this.reports);
//   }
// }

// const ITDep = new ITDepartment(2, [], ['first report ever']);
// // ITDep.mostRecentReport = '';
// ITDep.mostRecentReport = 'this is just an other boring reportS';

// ITDep.addAdmins('Baba');

// ITDep.getAdmins();

// ITDep.addEmployee('Zack');

// ITDep.printEmployeeInformations();

// ITDep.addEmployee('mansour');

// ITDep.printEmployeeInformations();

// console.log(ITDep.getDepartmentName());

// ITDep.addReport('this is a report');

// ITDep.getReports();

// const theMostRecentReport = ITDep.mostRecentReport;
// console.log(theMostRecentReport);

/**
 *  getters and setters,w hich can be great for encapsulating logic,and for adding extra logic, that should run when you try to read a property, or when you try to set a property.
 
 * getters - get keyword: is a feature that allow read property and operate on it within more complex logic.

 * setters - set keyword:is a feature that allow to set a value
 * getter and setters which can be great for encapsulating logic and for adding extra logic when you try to read a property or to set a property.
 */
