// interface Bird {
//   gender: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   gender: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal1(animal: Animal) {
//   let speed;
//   if (animal.gender === 'bird') {
//     speed = animal.flyingSpeed;
//   }
//   if (animal.gender === 'horse') {
//     speed = animal.runningSpeed;
//   }
//   console.log('From IF-statement:Moving with speed: ' + speed);
// }

// function moveAnimal2(animal: Animal) {
//   let speed;
//   switch (animal.gender) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('From SWITCH-statement:Moving with speed: ' + speed);
// }

// moveAnimal1({ gender: 'bird', flyingSpeed: 120 });
// moveAnimal1({ gender: 'horse', runningSpeed: 80 });

// moveAnimal2({ gender: 'bird', flyingSpeed: 120 });
// moveAnimal2({ gender: 'horse', runningSpeed: 80 });

/**
 * Descriminated union: type of type guard - is a pattern which helps with guard types, use when we work with union types and all is about checking the property which is in comon for both interfaces/object to diffrenciate them and in place of give type string for example we can narrow it to more specified value like we did in our example, that makes implementing type guards easier!!! and also eliminate the danger of mistyping , it is available when you working with objects and union types;
 */

// descriminated types => guards type:check the final type of complex intersected  within if blockes => intersection type: types combination of union types
