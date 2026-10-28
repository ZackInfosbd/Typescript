// export interface FileSystemComponent {
//   getSize(): number;
//   display(indent?: string): void;
// }

// export class FileItem implements FileSystemComponent {
//   constructor(
//     private readonly name: string,
//     private readonly size: number,
//   ) {}

//   getSize(): number {
//     return this.size;
//   }

//   display(indent = ''): void {
//     console.log(`${indent}${this.name} (${this.size} bytes)`);
//   }
// }

// export class Directory implements FileSystemComponent {
//   private readonly children: FileSystemComponent[] = [];

//   constructor(private readonly name: string) {}

//   add(component: FileSystemComponent): void {
//     this.children.push(component);
//   }

//   getSize(): number {
//     return this.children.reduce(
//       (total, child) => total + child.getSize(),
//       0,
//     );
//   }

//   display(indent = ''): void {
//     console.log(`${indent}${this.name}/ (${this.getSize()} bytes)`);

//     for (const child of this.children) {
//       child.display(`${indent}  `);
//     }
//   }
// }

// // A directory and a file share one interface, so callers can treat both as components.
// const project = new Directory('project');
// const source = new Directory('src');

// source.add(new FileItem('app.ts', 1200));
// source.add(new FileItem('utils.ts', 800));
// project.add(source);
// project.add(new FileItem('README.md', 600));

// project.display();
