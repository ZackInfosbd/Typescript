// // type Authenticatable = {
// //   email: string;
// //   password: string;

// //   login(): void;
// //   logout(): void;
// // };

// interface Authenticatable {
//   email: string;
//   password: string;

//   login(): void;
//   logout(): void;
// }
// // one from many differences of interfaces vs type - Declaration mergin:
// // where the interface can merge the both declaration of the interfaces.
// interface Authenticatable {
//   role: string;
// }

// let user: Authenticatable;

// user = {
//   email: 'test@example.com',
//   password: 'ajdhdg',
//   login() {
//     // reach out to database, check credentials, create a session.
//   },
//   logout() {
//     // clear the session.
//   },

//   role: 'ADMIN',
// };
