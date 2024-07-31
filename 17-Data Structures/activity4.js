//Activity 4 - Binary Tree
//Task 7

class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const root = new TreeNode(10)
root.left = new TreeNode(20)
root.right = new TreeNode(30)

console.log("Root :"+root.value + "\nLeft child: "+root.left.value+"\nRight child: "+root.right.value);

//Task 8
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertRecursively(this.root, newNode);
        }
    }

    // Helper function for recursive insertion
    _insertRecursively(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertRecursively(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertRecursively(currentNode.right, newNode);
            }
        }
    }

    // Perform an in-order traversal (left-root-right)
    inOrderTraversal(node = this.root) {
        if (!node) {
            return; // Base case: empty tree or leaf node
        }
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
}

// Example usage:
const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(3);
myTree.insert(7);

console.log("In-order traversal:");
myTree.inOrderTraversal();