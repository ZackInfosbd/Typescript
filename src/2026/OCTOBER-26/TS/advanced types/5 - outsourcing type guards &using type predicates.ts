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
// type FileSource = { type: "file"; path: string };
// const fileSource: FileSource = {
//   type: "file",
//   path: "some/path/to/file.csv",
// };

// type DBSource = { type: "db"; connectionUrl: string };
// const dbSource: DBSource = {
//   type: "db",
//   connectionUrl: "some-connection-url",
// };

// type Source = FileSource | DBSource;

// function isFileSource(source: Source): source is FileSource {
//   return source.type === "file";
// }

// function loadData(source: Source) {
//   // if ('path' in source) {
//   //   if (source.type === "file") {
//   if (isFileSource(source)) {
//     source.path;
//     // source.path; => use that to open the file
//     return;
//   }
//   source.connectionUrl;
//   // source.connectionUrl; => to reach out to database
// }
