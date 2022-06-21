class Department {
  private readonly id: string;
  public name: string;
  protected employees: string[];
  constructor(n: string, depName: string, emp: string[]) {
    this.id = n;
    this.name = depName;
    this.employees = emp;
  }
  describe(this: Department) {
    if (this.employees.length === 0) {
      console.log(
        `This department ${this.name}, which is under the DN: ${this.id} has no  employees`
      );
    } else {
      console.log(
        `This department ${this.name}, which is under the DN: ${this.id} has ${this.employees.length}  employees`
      );
    }
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmpInfos() {
    console.log(this.employees);
  }
}

class Accounting extends Department {
  admins: string[];
  constructor(id: string, public privileges: string[]) {
    super(id, 'Accounting', []);
    this.admins = privileges;
  }
  addAdmins(this: Accounting) {
    this.admins[0] = 'Zakaria';
    this.admins[1] = 'Katarzyna';
  }

  showAdmins(this: Accounting) {
    if (this.admins.length === 0) {
      console.log(`this Department ${this.name}, has no admins `);
    } else {
      console.log(`this Department ${this.name}, has ${this.admins.length} `);
    }
  }
}

class ITDepartment0 extends Department {
  private reports: string[];
  private lastReport: string;
  static fiscalYear = 2022;
  private static instance: ITDepartment0;

  private constructor(id: string, reps: string[], lastRep: string) {
    super(id, 'IT', []);
    this.reports = reps;
    this.lastReport = lastRep;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('no Reports found!');
    }
  }

  static getInstance() {
    if (ITDepartment0.instance) {
      return this.instance;
    } else {
      const instance = new ITDepartment0('ITD1', [], 'last report');
      return instance;
    }
  }

  static showFiscalYear() {
    console.log(this.fiscalYear);
  }

  set mostRecentValue(value: string) {
    if (!value) {
      throw new Error('please enter valid value!');
    } else {
      this.addReport(value);
    }
  }

  addReport(rep: string) {
    this.reports.push(rep);
  }

  showReports(this: ITDepartment0) {
    if (this.reports.length === 0) {
      console.log(`this Department ${this.name}, has no reports `);
    } else {
      console.log(`this Department ${this.name}, has ${this.reports.length} `);
    }
  }
}

const management = new Department('DM1', 'Management', []);
management.describe();
management.addEmployee('Zack');
management.addEmployee('Kasia');
management.describe();
management.printEmpInfos();

const accounting = new Accounting('DA3', ['Houwa', 'Hiya']);
accounting.describe();
accounting.addEmployee('Baba');
accounting.addEmployee('Yemma');
accounting.addEmployee('Ayoub');
accounting.describe();
accounting.printEmpInfos();
accounting.showAdmins();

const itDepartment = ITDepartment0.getInstance();
console.log(itDepartment.mostRecentReport);

console.log(ITDepartment0.fiscalYear);
