abstract class Department9 {
  // private readonly id: number;
  protected id: number;
  public name: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(employee: string) {
    return { employee: employee };
  }

  abstract describe(this: Department9): void;

  printInfosEmployee(employee: string) {
    this.employees.push(employee);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department9 {
  private reports: string[];
  private lastReport: string;

  constructor(id: number, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reports found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === 'Zack') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
    console.log(this.reports);
    console.log(this.lastReport);
  }
  describe() {
    console.log(
      `this Department ${this.name}, which is under the number ${this.id}`
    );
  }
}

class ITDepartment extends Department9 {
  admins: string[];
  constructor(id: number, public privileges: string[]) {
    super(id, 'IT');
    this.admins = privileges;
  }
  describe() {
    console.log(
      `the Department ${this.name}, which is under number ${this.id}`
    );
  }
}

// .1
// const test0 = new Department9(0,'Main');
const test1 = new AccountingDepartment(4, []);
const test2 = new ITDepartment(5, []);
test1.describe();
test2.describe();

/**
 * class abstraction: is when you give the structure of parent class which contains a property or a method that is not concret but the inhirited class should do that,and you force all inherited or child classes to have it but with own version of that abstracted property or method
 * important !!!: van not create an instance of abstract class
 * abstracted class cant be instantiated now but inherited classes can be inherited
 */
