// // function Required() {}

// // function PositiveNumber() {}

// // function Validate(obj:object) {}

// class Course {
//   // @Required
//   title: string;
//   // @PositiveNumber
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

//   // if (!validate(createdCourse)) {
//   //   alert('Invalid inputs, please try again)
//   // return;
//   // }

//   console.log(createdCourse);
// });

/**
 * => problem we want to intantiate the course class to create new course with data from end users but we are not sure if the data is guaranteed to be right?!
 * ================================================================================================
 * Property Decorator
 * => soultion: we need to validate the input.
 *
 * all of that can be done with third packages - will be seen later on this course in next comming topics
 *
 */
