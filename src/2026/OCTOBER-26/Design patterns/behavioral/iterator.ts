// interface Book {
//   title: string;
//   author: string;
// }

// class BookIterator implements Iterator<Book> {
//   private index = 0;

//   constructor(private readonly books: readonly Book[]) {}

//   next(): IteratorResult<Book> {
//     if (this.index >= this.books.length) {
//       return { value: undefined, done: true };
//     }

//     return { value: this.books[this.index++], done: false };
//   }
// }

// class BookCollection implements Iterable<Book> {
//   constructor(private readonly books: readonly Book[]) {}

//   [Symbol.iterator](): Iterator<Book> {
//     return new BookIterator(this.books);
//   }
// }

// const books = new BookCollection([
//   { title: 'The Hobbit', author: 'J. R. R. Tolkien' },
//   { title: 'Pride and Prejudice', author: 'Jane Austen' },
//   { title: 'Frankenstein', author: 'Mary Shelley' },
// ]);

// // Each iteration gets its own iterator and does not expose the collection's storage.
// for (const book of books) {
//   console.log(`${book.title} by ${book.author}`);
// }

// export {};
