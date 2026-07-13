// // STACK

// class StackNode<T> {
//   next?: StackNode<T>;

//   constructor(public value: T) {}
// }

// class Stack<T> {
//   first?: StackNode<T>;
//   length = 0;

//   push(value: T) {
//     const newNode = new StackNode(value);

//     if (this.length === 0) {
//       this.first = newNode;
//     }

//     newNode.next = this.first;
//     this.first = newNode;

//     this.length++;

//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     let temp = this.first;
//     this.first = this?.first?.next;
//     if (temp) {
//       temp.next = undefined;
//     }
//     this.length--;

//     return temp;
//   }

//   getNumberOfElements() {
//     return this.length;
//   }

//   print() {
//     let current = this.first;
//     console.log('Current: ', current);

//     //   while (current) {
//     //     console.log(current.value);
//     //     current = current.next;
//     //   }
//   }
// }

// let theStack = new Stack();

// console.log(theStack);

// console.log('--- NOW PUSH 1 ---');
// theStack.push(1);
// theStack.push(2);
// theStack.push(3);
// console.log('Length: ' + theStack.getNumberOfElements());
// theStack.print();

// console.log('--- NOW POP 2 ---');
// console.log(theStack.pop());
// console.log('Length: ' + theStack.getNumberOfElements());
