// abstract class CaffeineBeverage {
//   // The template method fixes the preparation order while subclasses customize steps.
//   prepareRecipe(): void {
//     this.boilWater();
//     this.brew();
//     this.pourIntoCup();
//     this.addCondiments();
//   }

//   protected abstract brew(): void;

//   protected abstract addCondiments(): void;

//   private boilWater(): void {
//     console.log('Boiling water');
//   }

//   private pourIntoCup(): void {
//     console.log('Pouring into cup');
//   }
// }

// class Tea extends CaffeineBeverage {
//   protected brew(): void {
//     console.log('Steeping the tea');
//   }

//   protected addCondiments(): void {
//     console.log('Adding lemon');
//   }
// }

// class Coffee extends CaffeineBeverage {
//   protected brew(): void {
//     console.log('Dripping coffee through filter');
//   }

//   protected addCondiments(): void {
//     console.log('Adding sugar and milk');
//   }
// }

// console.log('Making tea:');
// new Tea().prepareRecipe();

// console.log('\nMaking coffee:');
// new Coffee().prepareRecipe();

// export {};
