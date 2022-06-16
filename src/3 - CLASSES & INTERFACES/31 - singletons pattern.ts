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

class AccountingDepartment extends Department9 {
  private reports: string[];
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: number, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    // if(this.instance){...}
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(1, []);
    return this.instance;
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

// .1
// const test1 = new AccountingDepartment(1, []);
// .2
const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting1, accounting2);

/**
 * Singletons pattern done with private constructor: is about ensuring that you always have one instance of a certain class, this can be usefull in scenarios when you cant use static methods or properties or you dont want to but at the same time you want to make sure that you cant make multiple objects based on that class => just one object based on that class
 * if we make the constructor private => private constructor(){} => at the time of making an instance of the class which has private constructor it shows error ,so what is the the solution?
 * 1. can not instantiate it because constructor is private
 * solution:
 * make a private static property of type class name itself to store that class instance
 * we make a static method to get an instance of that singleton class, we check if that class has varible that hold the class itself,in the body of that static function we use this keyword which referse to the class itself because it is inside static method, not like in instance this referse to that instance.
 * 2. the same object, are the same instance
 * singletons pattern wont be used all the time, but can be helful in some scenarios
 */
