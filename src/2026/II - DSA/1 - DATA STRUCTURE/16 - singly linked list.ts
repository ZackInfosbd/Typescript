// class ListNode<T> {
//   next?: ListNode<T>;

//   constructor(public value: T) {}
// }

// class LinkedList<T> {
//   private head?: ListNode<T>;
//   private tail?: ListNode<T>;
//   private length = 0;

//   push(value: T) {
//     const node = new ListNode(value);
//     if (!this.head || !this.tail) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.length++;
//   }

//   pop() {
//     if (!this.head) undefined;

//     let temp = this.head;
//     let prev = this.head;

//     while (temp?.next) {
//       prev = temp;
//       prev = prev.next;
//     }

//     this.tail = prev;
//     if (this.tail) {
//       this.tail.next = undefined;
//     }
//     this.length--;

//     if (this.length === 0) {
//       this.head = undefined;
//       this.tail = undefined;
//     }

//     return temp;
//   }

//   unshift(value: T) {
//     const node = new ListNode(value);

//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     }

//     node.next = this.head;
//     this.head = node;

//     this.length++;

//     return this;
//   }

//   shift() {
//     if (!this.head) undefined;

//     // 1. point the first node/element

//     let temp = this.head;

//     // 2. Move the head to next node/element
//     this.head = this.head?.next;

//     // 3. Remove first element
//     if (temp?.next) {
//       temp.next = undefined;
//     }

//     this.length--;

//     if (this.length === 0) {
//       this.tail = undefined;
//     }
//   }

//   getFirstElement() {
//     return this.head;
//   }

//   getLastElement() {
//     if (!this.head) return undefined;

//     let temp = this.head;

//     while (temp.next) {
//       temp = temp.next;
//     }

//     return temp;
//   }

//   getElementByIndex(pos: number) {
//     let counter = 0;
//     let temp = this.head;

//     while (temp) {
//       if (counter === pos) {
//         return temp;
//       }
//       counter++;
//       temp = temp.next;
//     }

//     return null;
//   }

//   set(value: T, pos: number) {
//     let temp = this.getElementByIndex(pos);

//     if (temp) {
//       temp.value = value;
//       return true;
//     }

//     return false;
//   }

//   size() {
//     let counter = 0;
//     let temp = this.head;

//     while (temp) {
//       counter++;
//       temp = temp.next;
//     }

//     return counter;
//   }

//   clear() {
//     this.head = undefined;
//   }

//   insertAt(value: T, pos: number) {
//     if (pos > -1 && pos < this.length && this.head) {
//       let current = this.head;
//       let index = 0;
//       let previous = current;
//       let node = new ListNode(value);

//       if (pos === 0) {
//         node.next = this.head;
//         this.head = node;
//       } else {
//         while (index++ < pos && current.next) {
//           previous = current;
//           current = current.next;
//         }
//         node.next = current;
//         previous.next = node;
//       }
//       this.length++;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   removeAt(pos: number) {
//     if (pos > -1 && pos < this.length && this.head) {
//       let current = this.head;
//       let previous: ListNode<T> = current;
//       let index = 0;

//       if (pos === 0) {
//         this.head = current.next;
//       } else {
//         while (index++ < pos && current.next) {
//           previous = current;
//           current = current.next;
//         }
//         previous.next = current.next;
//       }
//       this.length--;
//       return current;
//     } else {
//       return undefined;
//     }
//   }

//   getNumberOfElements() {
//     return this.length;
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }

// const numberList = new LinkedList<number>();

// numberList.push(10);
// numberList.push(5);
// numberList.push(-3);

// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// // numberList.pop();
// // console.log('Length: ' + numberList.getNumberOfElements());

// console.log('--- NOW REMOVING INDEX 1 ---');
// numberList.removeAt(1);
// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// console.log('--- NOW INSERTING AT INDEX 1 ---');
// numberList.insertAt(100, 1);
// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// console.log('--- NOW UNSHIFT---');
// numberList.unshift(1000000);
// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// console.log('--- NOW SHIFT---');
// numberList.shift();
// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// console.log('--- NOW GET FIRST ELEMENT---');
// console.log('Get First Element: ', numberList.getFirstElement());

// console.log('--- NOW GET LAST ELEMENT---');
// console.log('Get the last element: ', numberList.getLastElement());

// console.log('--- NOW GET ELEMENT BY INDEX---');
// console.log('Get Element by index: ', numberList.getElementByIndex(1));

// console.log('--- NOW SET---');
// numberList.set(1000000, 10000);
// console.log('Length: ' + numberList.getNumberOfElements());
// numberList.print();

// console.log('--- NOW SIZE---');
// console.log(numberList.size());

// console.log('--- NOW CLEAR---');
// console.log(numberList.clear());

// const nameList = new LinkedList<string>();
// //
