// class Department7 {
//   private readonly id: number;
//   private name: string;
//   protected employees: string[] = [];
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   describe(this: Department7) {
//     console.log(
//       `the Department ${this.name}, which is under the number ${this.id}`
//     );
//   }

//   printInfosEmployee(employee: string) {
//     this.employees.push(employee);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment2 extends Department7 {
//   private reports: string[];
//   private lastReport: string;

//   constructor(id: number, reports: string[]) {
//     super(id, 'Accounting');
//     this.reports = reports;
//     this.lastReport = reports[0];
//   }

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No reports found');
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass in a valid value');
//     }
//     this.addReport(value);
//   }

//   addEmployee(name: string) {
//     if (name === 'Zack') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//     console.log(this.reports);
//     console.log(this.lastReport);
//   }
// }

// const test = new AccountingDepartment2(2, []);
// test.mostRecentReport = 'i am the setter report!!!';
// console.log(test.mostRecentReport);

// test.describe();
// test.printInfosEmployee('Ayoub');
// test.printInfosEmployee('Mansour');
// test.addReport('i am the last report');
// console.log(test.mostRecentReport);

/**
 * getters - get keyword: is a feature that allow read property and operate on it within more complex logic.
 * setters - set keyword:is a feature that allow to set a value
 * getter and setters which can be great for encapsulating logic and for adding extra logic when you try to read a property or to set a property.
 */
