// /**
//  * Intersection Types.
//  * Type Guards.
//  * Descriminated Unions.
//  * Function Overloads.
//  * Index Types.
//  * Constant Types "as const".
//  * Record Types.
//  * Satisfies Keyword
//  */
// type FileSource = { path: string };

// const fileSource: FileSource = {
//   path: "some/path/to/file.csv",
// };

// type DBSource = { connectionUrl: string };

// const dbSource: DBSource = {
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   if ("path" in source) {
//     source.path; // use that to open the file
//     return;
//   }

//   source.connectionUrl; // use that to connect to the database
// }
