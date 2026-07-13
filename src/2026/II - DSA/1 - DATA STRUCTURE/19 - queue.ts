// // QUEUE

// class QueueNode<T> {
//   next?: QueueNode<T>;

//   constructor(public value: T) {}
// }

// class Queue<T> {
//   first?: QueueNode<T>;
//   last?: QueueNode<T>;
//   length = 0;

//   enqueue(value: T) {
//     const newNode = new QueueNode(value);

//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else if (this.last) {
//       this.last.next = newNode;
//     }
//     this.last = newNode;

//     this.length++;

//     return this;
//   }

//   dequeue() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     let temp = this.first;

//     if (this.length === 1) {
//       this.first = undefined;
//       this.last = undefined;
//     }

//     this.first = this.first?.next;

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

//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }

// let theQueue = new Queue();

// console.log(theQueue);

// console.log('--- NOW ENQUEUE 1 ---');
// theQueue.enqueue(1);
// theQueue.enqueue(2);
// theQueue.enqueue(3);

// console.log('Length: ' + theQueue.getNumberOfElements());
// theQueue.print();

// console.log('--- NOW DEQUEUE 2 ---');
// console.log(theQueue.dequeue());
// console.log('Length: ' + theQueue.getNumberOfElements());
// theQueue.print();
