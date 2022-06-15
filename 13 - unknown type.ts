// TODO: 29 - Working with Unown Type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'zack';

// 1.
// userName = userInput;

// 2.
if (typeof userInput === 'string') {
  userName = userInput;
}

/**
 * unkown type: is a type that isnt unknown yet, accept all the values types, kinda any type but not really
 * 1. type unknown isnt assignable to other types , but any does.
 * 2. if you want to assign unknow type to another type you can type runtime check it .if both are of the same type then it will be assignable.
 */
