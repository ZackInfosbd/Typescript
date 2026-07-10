// class User {
//   private _firstName: string = '';
//   private _lastName: string = '';

//   set firstName(name: string) {
//     if (name.trim() === '') throw Error('Invalid first name');

//     this._firstName = name;
//   }

//   set lastName(name: string) {
//     if (name.trim() === '') throw Error('Invalid last name');

//     this._lastName = name;
//   }

//   get fullName() {
//     return this._firstName + ' ' + this._lastName;
//   }

//   static eid = 'USER';

//   static greet() {
//     console.log('Hello');
//   }
// }

// console.log(User.eid);
// console.log(User.greet());
