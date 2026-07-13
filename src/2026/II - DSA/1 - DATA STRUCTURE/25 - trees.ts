// // BST - Binary Search Tree
// class TreeNode<T> {
//   left?: TreeNode<T>;
//   right?: TreeNode<T>;

//   constructor(public value: T) {}
// }

// class BSTree<T extends number | string> {
//   root?: TreeNode<T>;

//   insert(value: T) {
//     const newNode = new TreeNode(value);

//     if (!this.root) {
//       this.root = newNode;
//       return this;
//     }

//     let temp: TreeNode<T> = this.root;

//     while (true) {
//       if (newNode.value === temp.value) {
//         return undefined;
//       }

//       if (newNode.value < temp.value) {
//         if (!temp.left) {
//           temp.left = newNode;
//           return this;
//         } else {
//           temp = temp.left;
//         }
//       } else {
//         if (!temp.right) {
//           temp.right = newNode;
//           return this;
//         }
//         temp = temp.right;
//       }
//     }
//   }

//   includes(value: T) {
//     if (!this.root) {
//       return false;
//     }

//     let temp: TreeNode<T> | undefined = this.root;

//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else if (value === temp.value) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// const tree = new BSTree();
// tree.insert(5);
// tree.insert(8);
// tree.insert(3);
// tree.insert(2);
// tree.insert(7);
// tree.insert(9);

// console.log(tree);
// console.log(tree.includes(7));
