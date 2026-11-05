// interface Image {
//   display(): void;
// }
//
// class RealImage implements Image {
//   constructor(private readonly filename: string) {
//     this.loadFromDisk();
//   }
//
//   private loadFromDisk(): void {
//     console.log(`Loading ${this.filename} from disk...`);
//   }
//
//   display(): void {
//     console.log(`Displaying ${this.filename}`);
//   }
// }
//
// class ImageProxy implements Image {
//   private realImage?: RealImage;
//
//   constructor(private readonly filename: string) {}
//
//   display(): void {
//     if (!this.realImage) {
//       this.realImage = new RealImage(this.filename);
//     }
//
//     this.realImage.display();
//   }
// }
//
// // Creating the proxy does not load the image; the first display call does.
// const image: Image = new ImageProxy('landscape.jpg');
// console.log('Image proxy created');
//
// image.display();
// image.display();