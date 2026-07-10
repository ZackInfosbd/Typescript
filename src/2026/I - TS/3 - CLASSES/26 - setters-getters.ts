// TS Getters

// class User {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//   ) {}

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// const zack = new User('zack', 'kour');
// const ayoub = new User('ayoub', 'kour');

// console.log(zack.fullName);

// // TS Setters

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
// }

// const zack = new User();
// // zack.firstName = '';
// zack.firstName = 'zack';
// zack.lastName = 'kourd';

// const ayoub = new User();
// ayoub.lastName = 'kou';

// console.log(zack.fullName);
