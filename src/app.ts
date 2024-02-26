let a: { [key: number]: string };
a = { 123: 'abc', 456: 'def' };
let b: { [key: string]: boolean };
b = { abc: true, def: false, ghi: true };

console.log(a[123]);
console.log(b['def']);
