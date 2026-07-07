// type FileSource = { path: string };
// const fileSource: FileSource = {
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { connectionUrl: string };
// const dbSource: DBSource = {
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   if ('path' in source) {
//     source.path; // // => use that to open the file

//     return;
//   }

//   // source.connectionUrl; // // => to reach out to database
// }

// // More on type Guard - classes using "instanceOf"

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

// const user = new User('zach');
// const admin = new Admin(['ban', 'restore']);

// type Entity = User | Admin;

// function init(entity: Entity) {
//   if (entity instanceof User) {
//     entity.join();
//     return;
//   }

//   entity.scan();
// }
