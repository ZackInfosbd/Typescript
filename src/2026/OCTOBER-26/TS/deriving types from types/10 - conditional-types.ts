// /**
//  * typeof and keyof.
//  * indexed access types & mapped types.
//  * conditional types.
//  * built-in utility types.
//  * more!
//  */

// type StringArray = string[];

// // //type ElementType = StringArray[number];
// // type ElementType<T extends any[]> = T[number];

// // type example1 = ElementType<StringArray>;

// // let text = "hello";

// // type Example2 = ElementType<typeof text>

// // type GetElementType<T> = T extends any[]? T[number] : T
// type GetElementType<T> = T extends any[] ? T[number] : never;

// let text = "hello";
// type Example3 = GetElementType<typeof text>;
// type Example4 = GetElementType<StringArray>;
