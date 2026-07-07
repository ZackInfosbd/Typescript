// type FileSource = { type: 'file'; path: string };
// const fileSource: FileSource = {
//   type: 'file',
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { type: 'db'; connectionUrl: string };
// const dbSource: DBSource = {
//   type: 'db',
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   //   if ('path' in source) {
//   if (source.type === 'file') {
//     source.path; // // => use that to open the file

//     return;
//   }

//   // source.connectionUrl; // // => to reach out to database
// }

// // Outsourcing Type Guards & Using Type Predicates

// type FileSource = { type: 'file'; path: string };
// const fileSource: FileSource = {
//   type: 'file',
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { type: 'db'; connectionUrl: string };
// const dbSource: DBSource = {
//   type: 'db',
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// function isFile(source: Source) {
//   return source.type === 'file';
// }

// function loadData(source: Source) {
//   //   if ('path' in source) {
//   //   if (source.type === 'file') {
//   if (isFile(source)) {
//     // // Type Predicates
//     source.path; // // => use that to open the file

//     return;
//   }

//   // source.connectionUrl; // // => to reach out to database
// }
