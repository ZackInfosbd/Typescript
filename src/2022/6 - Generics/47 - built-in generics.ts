// const names: any[] = [];
// const names: Array<any> = [];
// const names: Array<string | number> = [];

// const names: Array<string> = [' zack', 'kasia'];
// console.log(names[0].split(' '));

// // .1
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// // .2
// const promise2: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise2.then((data) => {
//   data.split(' ');
// });

/**
 * Generics: generics exists in TS not in vanilla JS, we use genrics to write Flexible & Re-usable Code, we can say that generic is a type which is connected to an other type; for example a given array of string string[]  its type is array of string values = array + string => Array<string> => string[] === Array<string>
 * in our given example we have seen how the Promises are of genric types Promise<unknown> because they do not know which type of values they return
 * 1. in the first example we have gave precised generic type string type to Promise type because we know that it will return string
 * 2. in the first example we have gave precised generic type number type to Promise type because we know that it will return number, thats why the split function did not work because the value returned is a number
 *
 * ==> you can build your own generic classes or functions which may do something totally different
 * ==> Generic types help you to get additional type information if you got more complex class or function that does something with the data that is comming in, in a way that we dont care about data being of one particualr type but you want to store the type information of the incoming data to get better TS support whenever work with generic types
 */
