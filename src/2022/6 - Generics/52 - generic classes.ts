// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Zack');
// textStorage.addItem('Kasia');
// textStorage.removeItem('Zack');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// .1
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Zack' });
// objStorage.addItem({ name: 'Kasia' });
// objStorage.removeItem({ name: 'Zack' });

// .2
// const objStorage = new DataStorage<object>();
// console.log(objStorage.getItems());
// const zackObj = { name: 'Zack' };
// const kasiaObj = { name: 'kasia' };
// objStorage.addItem(zackObj);
// objStorage.addItem(kasiaObj);
// objStorage.removeItem({ name: 'Zack' });
// console.log(objStorage.getItems());

/**
 * as we have said generics allow as to make flexible TS type checks but still strongly typed class like with functions.
===================== 
* problem:
 * 1. with objects if we remove an item from the array in this case object, the object of index[0] isnt deleted- object are reference types (objects,arrays,functions => reference types not primitives )
 * 2. create and pass the same object as argument
======================
solution 
* extend the generic to let it work with primitives => wont work with objects
 */
