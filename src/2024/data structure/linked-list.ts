// // Move the class definition of Node outside of the selection
// // to avoid the duplicate identifier error.
// // ...

// class Nodde<T> {
//   data: T;
//   next: Nodde<T> | null;

//   constructor(data: T, next?: Nodde<T> | null) {
//     this.data = data;
//     this.next = next ?? null;
//   }
// }

// class LinkedList<T> {
//   private head: Nodde<T> | null;

//   constructor() {
//     this.head = null;
//   }

//   // Add an element to the beginning of the list
//   prepend(data: T) {
//     const newNode = new Nodde<T>(data, this.head);
//     this.head = newNode;
//   }

//   // Add an element to the end of the list
//   append(data: T) {
//     if (!this.head) {
//       this.head = new Node(data);
//       return;
//     }

//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = new Node(data);
//   }

//   // Insert an element after a specific value
//   insertAfter(value: T, newData: T) {
//     let current = this.head;
//     while (current && current.data !== value) {
//       current = current.next;
//     }
//     if (current) {
//       const newNode = new Noddåe(newData, current.next);
//       current.next = newNode;
//     }
//   }

//   // Remove the first element
//   removeFirst() {
//     if (this.head) {
//       this.head = this.head.next;
//     }
//   }

//   // Remove a specific element
//   remove(value: T) {
//     if (!this.head) return;

//     let current = this.head;
//     let previous: Node<T> | null = null;

//     while (current && current.data !== value) {
//       previous = current;
//       current = current.next;
//     }

//     if (current) {
//       if (previous) {
//         previous.next = current.next;
//       } else {
//         this.head = current.next;
//       }
//     }
//   }

//   // Check if the list contains a specific element
//   contains(value: T): boolean {
//     let current = this.head;
//     while (current) {
//       if (current.data === value) {
//         return true;
//       }
//       current = current.next;
//     }
//     return false;
//   }

//   // Print the contents of the list
//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Example usage
// const list = new LinkedList<number>();
// list.append(10);
// list.prepend(5);
// list.insertAfter(5, 7);
// list.removeFirst();
// list.contains(7); // true
// list.print(); // Output: 7, 10
