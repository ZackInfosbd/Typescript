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
// }

// //const zack = new User("Zack", "Smith"); // expected 0 arguments but got 2, because there is no constructor.

// const zack = new User();

// zack.firstName = "Zack";
// // zack.lastName = "";   // // Error: Last name cannot be empty
// zack.lastName = "Smith";

// console.log(zack.fullName);
