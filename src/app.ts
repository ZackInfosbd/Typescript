// Breadth First Search
// BST - Binary Search Tree
class TreeNode<T> {
  left?: TreeNode<T>;
  right?: TreeNode<T>;

  constructor(public value: T) {}
}

class BSTree<T extends number | string> {
  root?: TreeNode<T>;

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp: TreeNode<T> = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  includes(value: T) {
    if (!this.root) {
      return false;
    }

    let temp: TreeNode<T> | undefined = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  // BFS - Breadth First Search
  bfs() {
    let current = this.root;
    const queue: TreeNode<T>[] = [];
    const data: T[] = [];

    if (current) queue.push(current);

    while (queue.length > 0) {
      current = queue.shift()!;
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }

  //DFS - depth first search (Pre-order)
  dfs() {}
}

const tree = new BSTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(7);
tree.insert(9);

console.log(tree);
console.log(tree.includes(7));

console.log(tree.bfs());
