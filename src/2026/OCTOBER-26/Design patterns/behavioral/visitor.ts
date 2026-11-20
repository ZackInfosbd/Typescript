// interface ShapeVisitor<Result> {
//   visitCircle(circle: Circle): Result;
//   visitRectangle(rectangle: Rectangle): Result;
// }

// interface Shape {
//   accept<Result>(visitor: ShapeVisitor<Result>): Result;
// }

// class Circle implements Shape {
//   constructor(readonly radius: number) {}

//   accept<Result>(visitor: ShapeVisitor<Result>): Result {
//     return visitor.visitCircle(this);
//   }
// }

// class Rectangle implements Shape {
//   constructor(
//     readonly width: number,
//     readonly height: number,
//   ) {}

//   accept<Result>(visitor: ShapeVisitor<Result>): Result {
//     return visitor.visitRectangle(this);
//   }
// }

// class AreaVisitor implements ShapeVisitor<number> {
//   visitCircle(circle: Circle): number {
//     return Math.PI * circle.radius ** 2;
//   }

//   visitRectangle(rectangle: Rectangle): number {
//     return rectangle.width * rectangle.height;
//   }
// }

// class PerimeterVisitor implements ShapeVisitor<number> {
//   visitCircle(circle: Circle): number {
//     return 2 * Math.PI * circle.radius;
//   }

//   visitRectangle(rectangle: Rectangle): number {
//     return 2 * (rectangle.width + rectangle.height);
//   }
// }

// const shapes: Shape[] = [new Circle(3), new Rectangle(4, 5)];
// const areaVisitor = new AreaVisitor();
// const perimeterVisitor = new PerimeterVisitor();

// for (const shape of shapes) {
//   console.log(
//     `${shape.constructor.name}: area = ${shape.accept(areaVisitor).toFixed(2)}, ` +
//       `perimeter = ${shape.accept(perimeterVisitor).toFixed(2)}`,
//   );
// }

// export {};
