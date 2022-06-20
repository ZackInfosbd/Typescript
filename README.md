# Typescript

### Typescript Types Basics

#### Javascript Core-Types vs Typescript types

- In JS we used to do if check types! => 1-core-types.ts
- All JS types are applied in Typescript:
  - inline Typescript assignment for number, string, boolean
  - object(object,array,function):
    - objects: type keyword to create key-value types or interfaces.
    - arrays: inline Typescript types assignment (e.g): string | number | any []
    - functions: inline Typescript types assignment for params and return statement

#### Typescript Types

- Tuple: array with fixed length and fixed types.
- Enums: enumerated global constants identifiers which are human readable.
- Union: combined types type | type.
- Literal types: hard coded literals 'text' (e.g 'as-number') passed as types
- Custom types: create Custom type with help of type keyword, type CT = string | number
- Function type: Typescript types inline assigned for params(values - callbacks) and returns.
- Unkown type: is a type that isnt unknown yet.
- Never type: never return something.

#### Typescript & ES6 Features

- Var, let, const: variables declaration keyword.
- Arrow Function: function shorter syntax, sometimes unexpected bahvior with (this)
- Default paramter: default parameter value assignment, comes at last position.
- Spread operator: extract&copy all the values of an array or object.
- Rest operator: accept unlimeted amount of params. no types but tuples for arrays!
- Arrays/Object destructuring: arrays and objects values can be accessed.
