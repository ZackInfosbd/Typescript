// // DOUBLE LINKED LIST
// class ListNode<T> {
//   next?: ListNode<T>;
//   prev?: ListNode<T>;

//   constructor(public value: T) {}
// }

// class DoublyLinkedList<T> {
//   private head?: ListNode<T>;
//   private tail?: ListNode<T>;
//   private length = 0;

//   push(value: T) {
//     const newNode = new ListNode(value);
//     if (!this.head || !this.tail) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;

//     return this;
//   }

//   pop() {
//     if (this.length === 0) undefined;

//     let temp = this.tail;

//     if (this.length === 1) {
//       this.head = undefined;
//       this.tail = undefined;
//     } else {
//       this.tail = this.tail?.prev;

//       if (this.tail) {
//         this.tail.next = undefined;
//       }

//       if (temp) {
//         temp.prev = undefined;
//       }
//     }

//     this.length--;

//     return temp;
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

//   unshift(value: T) {
//     const newNode = new ListNode(value);

//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;

//       if (this.head) {
//         this.head.prev = newNode;
//       }
//       this.head = newNode;
//     }
//     this.length++;

//     return this;
//   }

//   shift() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     let temp = this.head;

//     if (this.length === 1) {
//       this.head = undefined;
//       this.tail = undefined;
//     }
//     if (this.head) {
//       this.head = this.head.next;

//       if (this.head) {
//         this.head.prev = undefined;
//       }
//     }
//     if (temp) {
//       temp.next = undefined;
//     }

//     this.length--;

//     return temp;
//   }

//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;

//     let next = temp;
//     let prev = undefined;

//     for (let i = 0; i < this.length; i++) {
//       if (temp) {
//         next = temp.next;
//         temp.next = prev;
//         prev = temp;
//         temp = next;
//       }
//     }
//   }
// }

// const numberDoubleList = new DoublyLinkedList<number>();

// numberDoubleList.push(10);
// numberDoubleList.push(19);
// numberDoubleList.push(-7);

// console.log('--- NOW PUSH ---');
// console.log('Length: ' + numberDoubleList.getNumberOfElements());
// numberDoubleList.print();

// console.log('--- NOW POP ---');
// numberDoubleList.pop();
// numberDoubleList.print();
// console.log('Length: ' + numberDoubleList.getNumberOfElements());

// console.log('--- NOW UNSHIFT ---');
// numberDoubleList.unshift(21);
// numberDoubleList.print();
// console.log('Length: ' + numberDoubleList.getNumberOfElements());

// console.log('--- NOW SHIFT ---');
// numberDoubleList.shift();
// numberDoubleList.print();
// console.log('Length: ' + numberDoubleList.getNumberOfElements());

// console.log('--- NOW REVERSE ---');
// numberDoubleList.reverse();
// numberDoubleList.print();
// console.log('Length: ' + numberDoubleList.getNumberOfElements());
