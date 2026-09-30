// // STACK

// class StackNode<T> {
//   next?: StackNode<T>;

//   constructor(public value: T) {}
// }

// class Stack<T extends number> {
//   first?: StackNode<T>;
//   length = 0;

//   push(value: T) {
//     const newNode = new StackNode(value);

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

//   getMin(): T | undefined {
//     if (!this.first) return undefined;

//     let min = this.first.value;
//     let current = this.first.next;

//     while (current) {
//       if (current.value < min) {
//         min = current.value;
//       }
//       current = current.next;
//     }

//     return min;
//   }

//   getNumberOfElements() {
//     return this.length;
//   }

//   print() {
//     let current = this.first;

//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }

// let theStack = new Stack();

// console.log(theStack);

// console.log('--- NOW PUSH ---');
// theStack.push(5);
// theStack.push(3);
// theStack.push(7);
// theStack.push(2);
// theStack.push(6);
// console.log('Length: ' + theStack.getNumberOfElements());
// theStack.print();

// console.log('Min: ' + theStack.getMin());
