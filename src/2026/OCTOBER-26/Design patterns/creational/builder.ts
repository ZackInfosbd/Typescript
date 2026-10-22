// type PizzaSize = "small" | "medium" | "large";

// class Pizza {
//   constructor(
//     public readonly size: PizzaSize,
//     public readonly crust: string,
//     public readonly sauce: string,
//     public readonly toppings: readonly string[],
//   ) {}

//   describe(): string {
//     return `${this.size} pizza with ${this.crust} crust, ${this.sauce} sauce, and ${this.toppings.join(", ") || "no toppings"}.`;
//   }
// }

// class PizzaBuilder {
//   private crust = "classic";
//   private sauce = "tomato";
//   private toppings: string[] = [];

//   constructor(private readonly size: PizzaSize) {}

//   withCrust(crust: string): this {
//     this.crust = crust;
//     return this;
//   }

//   withSauce(sauce: string): this {
//     this.sauce = sauce;
//     return this;
//   }

//   addTopping(topping: string): this {
//     this.toppings.push(topping);
//     return this;
//   }

//   build(): Pizza {
//     return new Pizza(this.size, this.crust, this.sauce, [...this.toppings]);
//   }
// }

// const veggiePizza = new PizzaBuilder("large")
//   .withCrust("thin")
//   .withSauce("pesto")
//   .addTopping("mushrooms")
//   .addTopping("spinach")
//   .build();

// const simplePizza = new PizzaBuilder("small").build();

// console.log(veggiePizza.describe());
// console.log(simplePizza.describe());
