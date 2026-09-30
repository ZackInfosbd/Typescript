// // /**
// //  * Intersection Types.
// //  * Type Guards.
// //  * Descriminated Unions.
// //  * Function Overloads.
// //  * Index Types.
// //  * Constant Types "as const".
// //  * Record Types.
// //  * Satisfies Keyword
// //  */

// class User {
//   constructor(public name: string) {}

//   join() {
//     // ...
//   }
// }

// class Admin {
//   constructor(permissions: string[]) {}

//   scan() {
//     // ...
//   }
// }

// const user = new User("Max");
// const admin = new Admin(["ban", "restore"]);

// type Entity = User | Admin;

// function init(entity: Entity) {
//   if (entity instanceof User) {
//     entity.join();

//     return;
//   }

//   entity.scan();
// }
