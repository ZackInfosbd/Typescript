// class Department8 {
//   private readonly id: number;
//   private name: string;
//   protected employees: string[] = [];
//   static fiscalYear = 2022;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   static createEmployee(employee: string) {
//     return { employee: employee };
//   }

//   describe(this: Department8) {
//     console.log(
//       `the Department ${this.name}, which is under the number ${this.id}`
//     );
//   }

//   printInfosEmployee(employee: string) {
//     this.employees.push(employee);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment extends Department8 {
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
// console.log(Department8.fiscalYear);

// console.log(Department8.createEmployee('zack'));

/**
 * static access modifier: it is a feature that makes the access to the class properties and methods without the need of instantiating(instance) the class => Match.pi/ Math.pow(), so the class name will work like a namespace or as grouping mecanism.
 * static properties are accessible only from static methods, for example they can be access from the constructor, and also because this keyword is based on the instance of the class, so static properties and methods are statics members and detached from instances
 * to access the static properties inside the class we need to use the name of the class with dot notation
 */
