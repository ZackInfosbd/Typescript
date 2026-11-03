// interface Beverage {
//   getDescription(): string;
//   getCost(): number;
// }

// class Espresso implements Beverage {
//   getDescription(): string {
//     return 'Espresso';
//   }

//   getCost(): number {
//     return 2.5;
//   }
// }

// abstract class BeverageDecorator implements Beverage {
//   constructor(protected readonly beverage: Beverage) {}

//   abstract getDescription(): string;
//   abstract getCost(): number;
// }

// class MilkDecorator extends BeverageDecorator {
//   getDescription(): string {
//     return `${this.beverage.getDescription()}, milk`;
//   }

//   getCost(): number {
//     return this.beverage.getCost() + 0.5;
//   }
// }

// class VanillaDecorator extends BeverageDecorator {
//   getDescription(): string {
//     return `${this.beverage.getDescription()}, vanilla`;
//   }

//   getCost(): number {
//     return this.beverage.getCost() + 0.25;
//   }
// }

// // Decorators can be stacked without changing the original beverage.
// const order: Beverage = new VanillaDecorator(new MilkDecorator(new Espresso()));

// console.log(`${order.getDescription()} costs $${order.getCost().toFixed(2)}`);
