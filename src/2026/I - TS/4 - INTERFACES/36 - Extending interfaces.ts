// interface Authenticatable {
//   email: string;
//   password: string;

//   login(): void;
//   logout(): void;
// }

// interface AuthenticatableAdmin extends Authenticatable {
//   role: 'admin' | 'superAdmin';
// }

// class AuthenticatableUser implements Authenticatable {
//   constructor(
//     public userName: string,
//     public email: string,
//     public password: string,
//   ) {}

//   login(): void {
//     //
//   }

//   logout(): void {
//     //
//   }
// }

// function authenticate(user: Authenticatable) {
//   user.login();
// }
