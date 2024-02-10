// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type UnknownEmployee = Admin | Employee;

// const e1: UnknownEmployee = {
//   name: 'Zack',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   // .1
//   // console.log('Priviliges: ' + emp.);

//   // .2
//   // if(typeof emp ==='employee') {
//   //   console.log('Priviliges: ' + emp.);

//   // }

//   // .3
//   // if(typeof emp ==='object') {
//   //   console.log('Priviliges: ' + emp.);

//   // .4

//   if ('privileges' in emp) {
//     console.log('Privileges ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date ' + emp.startDate);
//   }

//   // }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: 'Baba', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// // .4
// function useVehicle1(vehicle: Vehicle) {
//   vehicle.drive();
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

// function useVehicle2(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle1(v1);
// useVehicle1(v2);

// useVehicle2(v1);
// useVehicle2(v2);

/**
 * we use guard type mainly when will be a possiblity that any given input could take 2 types at once (union types) where typescript is not able to decide which type TS will pick up.as we said thats why type guard could be done and applied on union type mostly.
 * guards type: it is presents in union types, to define the right type we are gettin at the run time.
 * 1. emp. is linted because the union type is with the | logic operator so TS doesnt know what could be the type of the employee Admin or Employee thats why we do not see the autuocompliation because TS doesnt know yet.
 * 2. still doesnt work because at run time employeee is not built-in type so JS will m´not know it
 * 3. make no difference still because object at the end is just object has no thing to do with properties
 * 4.solution => we can use checks with (in) keyword which will check existence of property in object and that also is applied with classes and its citizens properties or methods
 * // OR
 * 5. we can make checks with the help of instanceof still JS operator; but note that with interfaces wont work because interface is a TS thing and wont be used at the run time
 *
 * ======> think it is better to use instanceof while checking
 * so type guard is just an idea or approach of checking if certain property or method exists before you try to use it, or if you can do something with type before u use it
===================================================================================================== 
* so with objects you use instanceof/ 'property' in object-identifier
 * for other types use typeof
 */
