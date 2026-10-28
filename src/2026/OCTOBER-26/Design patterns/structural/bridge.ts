// interface DrawingRenderer {
//   drawCircle(radius: number): void;
//   drawSquare(size: number): void;
// }

// class ConsoleRenderer implements DrawingRenderer {
//   drawCircle(radius: number): void {
//     console.log(`Drawing a circle with radius ${radius} in the console.`);
//   }

//   drawSquare(size: number): void {
//     console.log(`Drawing a square with size ${size} in the console.`);
//   }
// }

// class SvgRenderer implements DrawingRenderer {
//   drawCircle(radius: number): void {
//     console.log(`<circle r="${radius}" />`);
//   }

//   drawSquare(size: number): void {
//     console.log(`<rect width="${size}" height="${size}" />`);
//   }
// }

// abstract class Shape {
//   constructor(protected readonly renderer: DrawingRenderer) {}

//   abstract draw(): void;
// }

// class Circle extends Shape {
//   constructor(
//     renderer: DrawingRenderer,
//     private readonly radius: number,
//   ) {
//     super(renderer);
//   }

//   draw(): void {
//     this.renderer.drawCircle(this.radius);
//   }
// }

// class Square extends Shape {
//   constructor(
//     renderer: DrawingRenderer,
//     private readonly size: number,
//   ) {
//     super(renderer);
//   }

//   draw(): void {
//     this.renderer.drawSquare(this.size);
//   }
// }

// // Shapes (abstractions) can use either renderer (implementation) independently.
// const shapes: Shape[] = [
//   new Circle(new ConsoleRenderer(), 5),
//   new Square(new ConsoleRenderer(), 4),
//   new Circle(new SvgRenderer(), 5),
//   new Square(new SvgRenderer(), 4),
// ];

// shapes.forEach((shape) => shape.draw());
