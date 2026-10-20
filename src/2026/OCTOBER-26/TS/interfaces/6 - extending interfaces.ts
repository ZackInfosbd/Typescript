// interface Authenticable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

// // implicitly merging
// // interface Authenticable {
// //   role: string;
// // }

// // Explicitly merging by extends keyword
// interface AuthenticatableWithRole extends Authenticable {
//   role: "ADMIN" | "USER" | "GUEST";
// }

// let user: AuthenticatableWithRole;

// user = {
//   email: "",
//   password: "",
//   login() {},
//   logout() {},
//   role: "ADMIN",
// };

// function authenticate(user: Authenticable) {
//   user.email = "";
// }

// class AuthenticatbleUser implements Authenticable {
//   constructor(
//     public userName: string,
//     public email: string,
//     public password: string,
//     public role: string,
//   ) {}

//   login() {}

//   logout() {}
// }
