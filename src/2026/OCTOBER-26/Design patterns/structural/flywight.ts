// class TreeType {
//   constructor(
//     private readonly name: string,
//     private readonly color: string,
//     private readonly texture: string,
//   ) {}

//   draw(x: number, y: number): void {
//     console.log(
//       `Drawing ${this.color} ${this.name} (${this.texture}) at (${x}, ${y})`,
//     );
//   }
// }

// class TreeTypeFactory {
//   private static readonly treeTypes = new Map<string, TreeType>();

//   static getTreeType(name: string, color: string, texture: string): TreeType {
//     const key = `${name}:${color}:${texture}`;
//     let treeType = this.treeTypes.get(key);

//     if (!treeType) {
//       treeType = new TreeType(name, color, texture);
//       this.treeTypes.set(key, treeType);
//     }

//     return treeType;
//   }

//   static getCreatedTypeCount(): number {
//     return this.treeTypes.size;
//   }
// }

// class Tree {
//   constructor(
//     private readonly x: number,
//     private readonly y: number,
//     private readonly type: TreeType,
//   ) {}

//   draw(): void {
//     this.type.draw(this.x, this.y);
//   }
// }

// class Forest {
//   private readonly trees: Tree[] = [];

//   plantTree(x: number, y: number, name: string, color: string, texture: string): void {
//     const type = TreeTypeFactory.getTreeType(name, color, texture);
//     this.trees.push(new Tree(x, y, type));
//   }

//   draw(): void {
//     for (const tree of this.trees) {
//       tree.draw();
//     }
//   }
// }

// const forest = new Forest();
// forest.plantTree(10, 20, 'Oak', 'green', 'oak-bark');
// forest.plantTree(30, 40, 'Oak', 'green', 'oak-bark');
// forest.plantTree(50, 60, 'Pine', 'dark green', 'pine-bark');

// forest.draw();
// console.log(`Shared tree types created: ${TreeTypeFactory.getCreatedTypeCount()}`);
