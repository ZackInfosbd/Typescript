// class User {
//   //   private _firstName: string = "";
//   //   private _lastName: string = "";

//   protected _firstName: string = "";
//   protected _lastName: string = "";

//   set firstName(value: string) {
//     if (value.trim() === "") {
//       throw new Error("First name cannot be empty");
//     }
//     this._firstName = value;
//   }

//   set lastName(value: string) {
//     if (value.trim() === "") {
//       throw new Error("Last name cannot be empty");
//     }

//     this._lastName = value;
//   }

//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }

//   static uid = "USER";

//   static getUIDWithSuffix(suffix: string) {
//     console.log(User.uid + " - " + suffix);
//   }
// }

// class Employee extends User {
//   constructor(public jobTitle: string) {
//     // super(...) // if base class has a constructor, then derived class must call it using super() method.
//     super();
//     //super.firstName = "John"; // calling the setter method of base class
//   }

//   work() {
//     // console.log(this._firstName); // Property '_firstName' is private and only accessible within class 'User'.
//     console.log(this._firstName); // now it is accessible because we changed the access modifier of _firstName and _lastName from private to protected in the base class User.
//     // super._firstName // Class field '_firstName' defined by the parent class is not accessible in the child class via super.
//   }
// }
