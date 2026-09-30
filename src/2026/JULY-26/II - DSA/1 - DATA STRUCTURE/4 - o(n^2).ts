// // o(n^2)

// const numbers: number[] = [1, 2, 3, 4, 5];

// function findPairs(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       console.log(`Pair ${arr[i]},${arr[j]}`);
//     }
//   }
// }

// findPairs(numbers);

// // o(n^2) + n
// function findPairs2(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       console.log(`Pair ${arr[i]}, ${arr[j]}`);
//     }
//   }

//   for (let q = 0; q < arr.length; q++) {
//     console.log('-------------q', q);
//   }
// }

// findPairs2(numbers);

/**
 * If we combine all the "O" operations it becomes O(n^2 + 2).
 * O(n^2) is a Dominat term.
 * "n" is a non-Dominant term
 * So we remove the "non-dominant" term and we're only left with O(n^2).
 * this way, we simplify our bigO
 
 */
