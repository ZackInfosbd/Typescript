// class User {
//   public _firstName: string = "";
//   public _lastName: string = "";

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
//     return `${this._firstName} ${this._lastName}`;
//   }

//   static eid = "USER";

//   static getEidWithSuffix() {
//     return User.eid + "123";
//   }
// }

// console.log(User.eid);
// console.log(User.getEidWithSuffix());

// const zack = new User();

// zack.firstName = "Zack";
// zack.lastName = "Smith";

// console.log(zack.fullName);

// /**
//  * we use static keyword to define a property or method that belongs to the class itself,
//  rather than to instances of the class.
//  This means that we can access static properties and methods without creating an instance
//  of the class.
//  */
