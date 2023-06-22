class Department {
  constructor(
    private readonly id: number,
    protected name: string,
    private employees: string[]
  ) {}

  describe(this: Department) {
    console.log(`Department ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    console.log(`the new added employee is: ${employee} `);
  }

  printEmployeeInformations(this: Department) {
    console.log(
      `The number of the employees of ${this.name} is: ${this.employees.length}`
    );
  }
}

const accountinfDepartment = new Department(1, 'Accounting', []);

accountinfDepartment.addEmployee('Zack');

accountinfDepartment.describe();

accountinfDepartment.printEmployeeInformations();

class ITDepartment extends Department {
  constructor(id: number, private admins: string[]) {
    super(id, 'IT', []);
  }

  addAdmins(admin: string) {
    this.admins.push(admin);
    console.log(`the new added admin is: ${admin}`);
  }

  getAdmins() {
    console.log(
      `the number of admins in this department is: ${this.admins.length}`
    );
  }

  getDepartmentName() {
    console.log(`this is the name : ${this.name}`);
  }
}

const ITDep = new ITDepartment(2, []);

ITDep.addAdmins('Baba');

ITDep.getAdmins();

ITDep.addEmployee('Zack');

ITDep.printEmployeeInformations();

ITDep.addEmployee('mansour');

ITDep.printEmployeeInformations();

console.log(ITDep.getDepartmentName());
