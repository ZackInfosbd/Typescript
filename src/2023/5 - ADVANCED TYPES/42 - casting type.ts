// const paragraph1 = document.querySelector('p'); // .1
// const paragraph2 = document.getElementById('message-output'); //.2

// console.log(paragraph1);
// console.log(paragraph2);

//.3
// const userInput1 = document.getElementById('user-input');
// userInput1.value = 'hi there';

// .4
// -1
// const userInput1 = <HTMLInputElement>document.getElementById('user-input')!;
// -2
// const userInput1 = document.getElementById('user-input')! as HTMLInputElement;

// userInput1.value = 'Hi there';

// or

// const userInput1 = document.getElementById('user-input') as HTMLInputElement;
// if (userInput1) {
//   userInput1.value = 'Hi there';
// }

// or

// const userInput1 = document.getElementById('user-input');
// if (userInput1) {
//   (userInput1 as HTMLInputElement).value = 'Hi there';
// }

/**
 * Type Casting: helps you to tell TS that some value is of a specific type where TS is not able to detect it on its own but you as a devlopper you know that will be the case.
 * 1.TS knows which element is => HTMLParagraphElement
 * ==================================================
 * problem:
 * 2.TS does not know which element is => HTMLElement
 * 3.TS does not know which element is => HTMLElement
 * ===================================================
 * solution:
 * we use type casting => two versions of syntaxes
 - 1 we add the <HTMLTypeElement> in front of the element
 - 2 we use aliases => as HTMLInputElement to avoid clashes with jsx its kinda semilar in react the first version which is part of react used some parse and build tools and this is totally detached from TS
 * be consistent in your project and stick to one version

 //TODO: ! the exlamation mark located at the end of the expresion is actullay telling TS that this will be never NULL
//  TODO: use either ! or if check if(userInput) {code goes here....}
 */
