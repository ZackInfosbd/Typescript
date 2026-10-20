// interface Authenticable {
//   email: string;
//   password: string;
//   login(): void;
//   logout(): void;
// }

// // declaration mergin
// interface Authenticable {
//   role: string;
// }

// let user: Authenticable;

// user = {
//   email: "",
//   password: "",
//   login() {
//     // reach out the database and check if the user exists, check creds and create a session
//   },
//   logout() {
//     // destroy the session and log the user out
//   },
//   role: "admin",
// };

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
