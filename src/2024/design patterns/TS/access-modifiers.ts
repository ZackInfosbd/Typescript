// Public
// class Cat {
//     public name: string

//     constructor(name: string) {
//         this.name = name
//     }
// }

// const CAT = new Cat('Cosmo')
// console.log(CAT.name)

// Private
// class Cat {
//     private name: string

//     constructor(name: string) {
//         this.name = name
//     }
// }

// const CAT = new Cat('Cosmo')
// console.log(CAT.name)

// Protected
// class Animal {
//     protected name: string
//     protected age: number

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }

// class Cat extends Animal {
//     constructor(name: string, age: number) {
//         super(name, age)
//         console.log(this.name)
//     }
// }

// const CAT = new Cat('Cosmo', 8)
// console.log(CAT.name)

// class ClassWithProperty {
//     abc = 123
// }

// class ClassWithStaticProperty {
//     static abc = 123
// }

// class ClassWithMethod {
//     method() {
//         return 123
//     }
// }

// class ClassWithStaticMethod {
//     static method() {
//         return 123
//     }
// }

// const CLASS_A = new ClassWithProperty()
// console.log(CLASS_A.abc)

// const CLASS_B = new ClassWithStaticProperty()
// // console.log(CLASS_B.abc); // undefined. 'abc' does not
// // exist on CLASS_B instance.
// // You must reference it via the class name instead
// console.log(ClassWithStaticProperty.abc)

// const CLASS_C = new ClassWithMethod()
// console.log(CLASS_C.method())

// const CLASS_D = new ClassWithStaticMethod()
// // console.log(CLASS_D.method()); //error. CLASS_D.method is
// // not a function.
// // You must reference it via the class name instead
// console.log(ClassWithStaticMethod.method())

// Static
// class Circle {
//     radius: number
//     static PI = 3.14

//     constructor(radius: number) {
//         this.radius = radius
//     }
// }

// console.log('Circle.PI = ' + Circle.PI)

// const CIRCLE1 = new Circle(1)
// const CIRCLE2 = new Circle(2)
// const CIRCLE3 = new Circle(3)
// console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2)
// console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2)
// console.log('CIRCLE3 Area = ' + Circle.PI * CIRCLE3.radius ** 2)
