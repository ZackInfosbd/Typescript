// class Department6 {
//   private readonly id: number;
//   private name: string;
//   protected employees: string[] = [];

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   describe(this: Department6) {
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

// class ManagementDepartment extends Department6 {
//   private reports: string[];
//   constructor(id: number, rep: string[]) {
//     super(id, 'Management');
//     this.reports = rep;
//   }
//   addEmployee(name: string): void {
//     if (name === 'Zack') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const management = new ManagementDepartment(4, ['something went wrong']);

// management.describe();
// management.addEmployee('Kasia');
// management.printEmployeeInfos();
// management.printReports();

/**
 * protected: it is an access modifier keyword, it has private-like behaviour but it allows the access only from the inherited classes, subclasses child classes that extended that parent one-
 * it is used also to overide fields/methods of the base class means oerride and use other implementations rather than the ones exist im the base one.
 */
