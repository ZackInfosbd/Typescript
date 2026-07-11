// const stringArr: string[] = ['a', 'b', 'c', 'd', 'e'];
// const numArr: number[] = [1, 2, 3, 4, 5];
// const boolArr: boolean[] = [true, false];
// const mixedArr: any[] = ['a', 2, true, undefined, null, { a: 'a' }, ['b']];

// console.log(mixedArr);

// //Create own array:

// class MyArray {
//   length: number = 0;
//   data: any = {};
//   constructor(leng: number, d: any) {
//     this.length = leng;
//     this.data = d;
//   }

//   push(item: any) {
//     this.data[this.length] = item;
//     // console.log('-----', this.data[this.length]);
//     this.length++;
//     return this.length;
//   }

//   get(index: number) {
//     return this.data[index];
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     console.log('------', lastItem);

//     delete this.data[this.length - 1];
//   }

//   shift() {
//     const firstItem = this.data[0];

//     // re-indexing
//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;

//     return firstItem;
//   }

//   deleteByIndex(index: number) {
//     const item = this.data[index];

//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;

//     return item;
//   }
// }

// const myCustomArray = new MyArray(4, mixedArr[5]);

// console.log('My custom array: ', myCustomArray);
// // console.log(myCustomArray.push('apple'));

// myCustomArray.push('apple');
// myCustomArray.push('orange');
// myCustomArray.push('mango');

// const getResult = myCustomArray.get(4);
// const popResult = myCustomArray.pop();
// const shiftResult = myCustomArray.shift();
// const deleteByIndexResult = myCustomArray.deleteByIndex(2);

// console.log(myCustomArray);
// console.log(getResult);
// console.log(popResult);
// console.log(shiftResult);
