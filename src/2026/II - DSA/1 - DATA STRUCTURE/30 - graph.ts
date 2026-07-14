// class Graph {
//   adjacencyList: Record<string, string[]> = {};

//   addVertex(vtx: string) {
//     if (!this.adjacencyList[vtx]) {
//       this.adjacencyList[vtx] = [];
//       return true;
//     }
//     return false;
//   }

//   // connection
//   addEdge(vtx1: string, vtx2: string) {
//     if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
//       this.adjacencyList[vtx1].push(vtx2);
//       this.adjacencyList[vtx2].push(vtx1);

//       return true;
//     }
//     return false;
//   }

//   removeEdge(vtx1: string, vtx2: string) {
//     if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
//       this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
//         (v) => v !== vtx2,
//       );
//       this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
//         (v) => v !== vtx1,
//       );

//       return true;
//     }

//     return false;
//   }

//   removeVertex(vtx: string) {
//     if (!this.adjacencyList[vtx]) return undefined;

//     for (let neighbor of this.adjacencyList[vtx]) {
//       this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
//         (v) => v !== vtx,
//       );
//     }

//     delete this.adjacencyList[vtx];

//     return this;
//   }
// }

// const g = new Graph();

// console.log(g);

// g.addVertex('A');
// g.addVertex('B');
// g.addVertex('C');

// console.log(g);

// const edge1 = g.addEdge('A', 'B');
// const edge2 = g.addEdge('A', 'C');
// const edge3 = g.addEdge('A', 'D');
// const edge4 = g.addEdge('B', 'D');
// const edge5 = g.addEdge('C', 'D');

// console.log(edge1);
// console.log(edge2);
// console.log(edge3);

// g.removeEdge('A', 'B');
// console.log(g);

// const removeVertexD = g.removeVertex('D');
// console.log(removeVertexD);
