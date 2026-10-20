// /**
//  * Intersection Types.
//  * Type Guards.
//  * Descriminated Unions.
//  * Function Overloads.
//  */

// // I
// type FileData = {
//   path: string;
//   content: string;
// };

// type DatabaseConnection = {
//   connectionString: string;
//   credentials: string;
// };

// type status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type AccessedFileData = FileData & status;
// type AccessedDatabaseConnection = DatabaseConnection & status;

// // II
// interface FileDataInterface {
//   path: string;
//   content: string;
// }

// interface DatabaseConnectionInterface {
//   connectionString: string;
//   credentials: string;
// }

// interface StatusInterface {
//   isOpen: boolean;
//   errorMessage?: string;
// }

// interface AccessedFileDataInterface
//   extends FileDataInterface, StatusInterface {}
// interface AccessedDatabaseConnectionInterface
//   extends DatabaseConnectionInterface, StatusInterface {}
// //
