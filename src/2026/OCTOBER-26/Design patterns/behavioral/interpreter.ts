// interface Expression {
//   interpret(context: ReadonlyMap<string, number>): number;
// }

// class NumberExpression implements Expression {
//   constructor(private readonly value: number) {}

//   interpret(_context: ReadonlyMap<string, number>): number {
//     return this.value;
//   }
// }

// class VariableExpression implements Expression {
//   constructor(private readonly name: string) {}

//   interpret(context: ReadonlyMap<string, number>): number {
//     const value = context.get(this.name);
//     if (value === undefined) {
//       throw new Error(`Unknown variable: ${this.name}`);
//     }

//     return value;
//   }
// }

// class AddExpression implements Expression {
//   constructor(
//     private readonly left: Expression,
//     private readonly right: Expression,
//   ) {}

//   interpret(context: ReadonlyMap<string, number>): number {
//     return this.left.interpret(context) + this.right.interpret(context);
//   }
// }

// class MultiplyExpression implements Expression {
//   constructor(
//     private readonly left: Expression,
//     private readonly right: Expression,
//   ) {}

//   interpret(context: ReadonlyMap<string, number>): number {
//     return this.left.interpret(context) * this.right.interpret(context);
//   }
// }

// const context = new Map<string, number>([
//   ['x', 2],
//   ['y', 4],
// ]);

// // Represents the expression (x + 3) * y as a tree of grammar rules.
// const expression = new MultiplyExpression(
//   new AddExpression(new VariableExpression('x'), new NumberExpression(3)),
//   new VariableExpression('y'),
// );

// console.log(expression.interpret(context)); // 20

// export {};
