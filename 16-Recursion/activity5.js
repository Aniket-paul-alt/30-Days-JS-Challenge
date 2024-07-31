//Activity 5 - Tree Traversal
//Task 9
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (!root) {
        return; // Base case: empty tree or leaf node
    }

    // Recurse on the left subtree
    inOrderTraversal(root.left);

    // Process the current node (e.g., log its value)
    console.log(root.val);

    // Recurse on the right subtree
    inOrderTraversal(root.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("In-order traversal:");
inOrderTraversal(root);


//Task 10
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root2) {
    // Base case: if the tree is empty, the depth is 0
    if (root2 === null) {
      return 0;
    }
  
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root2.left);
    const rightDepth = maxDepth(root2.right);
  
    // Return the maximum depth plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Example usage:
  const root2 = new Node(1);
  root2.left = new Node(2);
  root2.right = new Node(3);
  root2.left.left = new Node(4);
  
  const depth = maxDepth(root2);
  console.log("Depth of the binary tree:", depth);