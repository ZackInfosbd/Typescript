// const dataEntries: Record<string, number> = {
//     entry1: 0.51,
//     entry2:-1.23
// };

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// ...

dataEntries.entry2;
// dataEntries.entry3 // // this work with the broader type above when using Record type as in first example, but with the Satisfies keyword it narows down the type and make it more stricter - this kind of stricter keyword is used mostly with 3rd party libraries.
