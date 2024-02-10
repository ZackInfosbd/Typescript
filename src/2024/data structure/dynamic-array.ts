// Dynamic Array
// Normal array is a fixed length array, but dynamic array is a resizable array.
// The dynamic array is a resizable array, which can grow and shrink in size.

// array big(O) complexity

// access  Q(n)  = 1
// delete Q(n)  = Q(n) = delete + shift
// insert Q(n)  = Q(n) = insert + shift
// search Q(n)  = Q(n)

// space complexity Q(n)
// ===================> space complexity it differs from case to case but as general it is Q(n)

// Fixed Array size
// decalre a fixed size of an array using the new Array class
// const fixedArray: number[] = new Array(5);
// console.log(fixedArray);

// fixedArray.push(22);
// console.log(fixedArray);

class DynamicArray {
  private data: number[];
  private size: number;
  private capacity: number;

  constructor(capacity: number) {
    this.data = new Array(capacity);
    this.size = 0;
    this.capacity = capacity;
  }

  // add element to the array
  public add(element: number) {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.data[this.size] = element;
    this.size++;
  }

  // remove element from the array
  public remove(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bound');
    }
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
  }

  // get element from the array
  public get(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bound');
    }
    return this.data[index];
  }

  // resize the array
  private resize() {
    this.capacity = this.capacity * 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  getSize() {
    console.log(this.size);
  }

  // print the array
  public print() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.data[i]);
    }
  }
}

// initializing a dynamic array of size 3
// const numbers3 = new DynamicArray(3);
// const numbersArray1 = numbers3.add(20);
// const numbersArray2 = numbers3.add(21);
// const numbersArray3 = numbers3.add(22);
// error out of the bound
// console.log(numbers.get(3));

// numbers3.print();

// re-sizing a dynamic array of size 6
const numbers6 = new DynamicArray(6);
const numbersArray1 = numbers6.add(20);
const numbersArray2 = numbers6.add(21);
const numbersArray3 = numbers6.add(22);
const numbersArray4 = numbers6.add(23);
const numbersArray5 = numbers6.add(24);
const numbersArray6 = numbers6.add(25);
numbers6.print();

// remove element from the array
numbers6.remove(1);
console.log('After removing the element');

numbers6.print();
