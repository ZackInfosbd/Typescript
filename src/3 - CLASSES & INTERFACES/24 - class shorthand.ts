// class Department2 {
//   id: number;
//   depName: string;
//   employees: string[] = [];
//   constructor(num: number, n: string) {
//     this.id = num;
//     this.depName = n;
//   }

//   describe(this: Department2) {
//     console.log(
//       `the Department name is: ${this.depName}, which is under the name of ${this.id}`
//     );
//   }

//   printEmployeeInfos(employee: string) {
//     this.employees.push(employee);
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// shorthand

class Department3 {
  constructor(private id: number, public name: string) {}

  describe(this: Department3) {
    console.log(
      `this Department ${this.name}, which is under the number ${this.id}`
    );
  }
}

const management = new Department3(1, 'Management');
management.describe();
