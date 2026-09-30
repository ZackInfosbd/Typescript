// Built-in TS types

function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : T; // Here we can use ReturnType<Type>, which does the same

type AddFnReturnValueType = ReturnValueType<AddFn>;

// Awaited<Type>
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys,Type>
// Pick<Type,Keys>
// Omit<Type,Keys>
// Excluds<UnionType,ExcludedType>
// ... - Check the Ts Docs
