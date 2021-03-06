// interface ValidatorConfig {
//   [property: string]: {
//     [validateableProp: string]: string[]; // ['required','positive']
//   };
// }
// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: [
//       ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//       'required',
//     ],
//   };
// }

// function PositiveNumber(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: [
//       ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//       'positive',
//     ],
//   };
// }

// function validate(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }
//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     console.log(prop);

//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case 'required':
//           isValid = isValid && !!obj[prop];
//           break;
//         case 'positive':
//           isValid = isValid && obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }

// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;
//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector('form')!;
// courseForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const titleElement = document.getElementById('title') as HTMLInputElement;
//   const priceElement = document.getElementById('price') as HTMLInputElement;

//   const title = titleElement.value;
//   const price = +priceElement.value;

//   const createdCourse = new Course(title, price);

//   if (!validate(createdCourse)) {
//     alert('Invalid inputs, please try again');
//     return;
//   }

//   console.log(createdCourse);
// });

/**
 * => last example part(2)
 * first naiive validation with the help of TS decorators using property decorator
 =======================================================================================
//  TODO: TS example Typestack/class-validator on GitHub
 =======================================================================================
 for better validator decorators use please third packages to get elevated developement experience
 =======================================================================================
 =======================================================================================
 */
