// interface Authenticable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

// interface Authenticable {
//   role: string;
// }

// let user: Authenticable;

// user = {
//   email: "",
//   password: "",
//   login() {
//     // ...
//   },
//   logout() {
//     // some logic here
//   },
//   role: "admin",
// };

// // Here
// // function authenticate(user: { email: string; password: string }) {
// //   user.email = "";
// // }

// function authenticate(user: Authenticable) {
//   user.email = "";
// }

// class AuthenticatbleUser implements Authenticable {
//   constructor(
//     public userName: string, // van be add while it does not exist in the interface, so the interface is therefor to ensure the minimal shape
//     public email: string,
//     public password: string,
//     public role: string,
//   ) {}

//   login() {
//     // some logic to login the user
//   }

//   logout() {
//     // some logic to logout the user
//   }
// }
