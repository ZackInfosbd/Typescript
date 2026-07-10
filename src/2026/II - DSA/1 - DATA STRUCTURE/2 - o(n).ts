const groceries: string[] = ['milk', 'eggs', 'potatos', 'apple'];

// o(n)
// const searchForItem = (item: string) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`found item ${item}`);
//     }
//   }
// };

// searchForItem('potatos');

// ==========

// const searchForItem = (itemI: string, itemJ: string) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === itemI) {
//       console.log(`found item ${itemI}`);
//     }
//   }

//   for (let j = 0; j < groceries.length; j++) {
//     if (groceries[j] === itemJ) {
//       console.log(`item j found ${itemJ}, at index ${j} `);
//     }
//   }
// };

// searchForItem('eggs', 'potatos');

// n + n = 2n = o(2n) => but we need to drop the constant on the left of the n which will result in big o(n)
