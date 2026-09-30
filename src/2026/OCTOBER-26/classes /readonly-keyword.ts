// Marking fields as "readonly"
// class User3 {
//   readonly hobbies: string[] = [];

//   constructor(
//     public name: string,
//     private readonly age: number,
//   ) {}

//   myAge() {
//     console.log("my age is: ", this.age);
//   }
// }

// const zack = new User3("Zack", 25);
// console.log(zack.name);
// zack.myAge();

// console.log(zack.hobbies);
// //zack.hobbies = ["reading", "writing"]; //Cannot assign to 'hobbies' because it is a read-only property.

// console.log(zack.hobbies.push("running"));
// console.log(zack.hobbies);

/* 
* it works because we are not reassigning the hobbies array, we are just modifying it.
The readonly keyword only prevents reassignment of the property itself, not the contents of the array.
* we 're not setting a new array as a value, which will be forbidden, because we are usng readonly keyword. 
but we're manipulating that original array in memory, which is allowed.
*/
