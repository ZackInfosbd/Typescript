// const isValidParenthesis = (text: string) => {
//   const stack: string[] = [];

//   const brackets: Record<string, string> = {
//     '{': '}',
//     '[': ']',
//     '(': ')',
//   };

//   for (let char of text) {
//     if (brackets[char]) {
//       stack.push(char);
//     } else {
//       const top = stack.pop();

//       if (!top || brackets[top] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValidParenthesis('(){}[]')); // true
// console.log(isValidParenthesis('([)]')); // false
// console.log(isValidParenthesis('()')); // true
// console.log(isValidParenthesis('(')); // false
