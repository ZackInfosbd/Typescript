// class Cat {
//   constructor() {}

//   walk(): void {
//     console.log('Cat is walking');
//   }
// }

// const cat = new Cat();
// cat.walk();

// class Cat {
//     name: string

//     constructor(name: string) {
//         this.name = name
//     }

//     walk(steps: number): void {
//         console.log(
//             this.name + ' the cat has walked ' + steps + ' steps.'
//         )
//     }
// }

// const CAT = new Cat('Cosmo')
// CAT.walk(20)

// class Cat {
//     name: string
//     stepsWalked: number = 0

//     constructor(name: string) {
//         this.name = name
//     }

//     walk(steps: number): void {
//         console.log(
//             this.name + ' the cat has walked ' + steps + ' steps.'
//         )
//         this.stepsWalked += steps
//     }

//     totalStepCount(): number {
//         return this.stepsWalked
//     }
// }

// const CAT = new Cat('Cosmo')
// CAT.walk(20)
// CAT.walk(20)
// console.log(
//     CAT.name +
//         ' the cat, has walked a total of ' +
//         CAT.totalStepCount() +
//         ' steps.'
// )
