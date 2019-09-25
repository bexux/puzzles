// Count the nodes on a tree

// Let's build a tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Building tree1 which has 5 unival subtrees:
// Example: https://github.com/jeantimex/javascript-problems-and-solutions/blob/1e172f13a222d53128c2bc52bf6202ff27bf3a27/src/common/trees.js

// Also generating random tree in python: https://www.dailycodingproblem.com/blog/big-tree/

//   0
//  / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

const tree1 = (() => {
  const root = new TreeNode(0);
  root.right = new TreeNode(0);
  root.left = new TreeNode(1);
  root.right.right = new TreeNode(0);
  root.right.left = new TreeNode(1);
  root.right.left.right = new TreeNode(1);
  root.right.left.left = new TreeNode(1);

  return root;
})();

// TreeNode {
//   value: 0,
//   left: TreeNode { value: 1, left: null, right: null },
//   right: 
//    TreeNode {
//      value: 0,
//      left: TreeNode { value: 1,
//        left:  { value: 1, left: null, right: null },
//        right: { value: 1, left: null, right: null } },
//      right: TreeNode { value: 0, left: null, right: null } }
// }

// Binary tree questions involve two steps
// 1. Solve base case - solving leaf node or null case
// 2. Recursive step - if you know the solution for the left subtree and the right subtree, how can you combine those results to give you the final answer?

function countNodes(root) {
  return (root !== null) ? (countNodes(root.left) + countNodes(root.right) + 1) : 0;
}

console.log('countNodes: ', countNodes(tree1));  // 7

// Given the root to a binary tree, return the deepest node.
function getDeepestNode(root) {
  let count = 0;
  function isLeafNode(root) {
    if (root === null) {
      return true;
    }
  
    if (root.left || root.right) {
      count++;
      return isLeafNode(root.left) + isLeafNode(root.right);
    }
  }
  isLeafNode(root);
  return count;
}

console.log('getDeepestNode ', getDeepestNode(tree1));

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees

// Examples:
//   a
//  / \
// (a) a
//     /\
//   (a) a
//        \
//        (A)

// This tree has 3 unival subtrees: indicated in paranethesis
// the two ‘a’ leaves and the one ‘A’ leaf.The ‘A’ leaf causes all its parents to not be counted as a unival tree, however.

//   a
//  / \
// (c) (b)
//      /\
//    (b) (b)
//          \
//          (b)

// This has 5. The c leaf and every b.

function countUnivalSubTrees(tree) { 
  // given root to binary tree, check value of nodes
  let count = 0;

  function isUnival(root) {
    if (root === null) {
      return true;
    }
    
    const left = root.left;
    const right = root.right;
  
    // check if the left or right node matches the current value
    const isLeftNodeUnival = isUnival(root.left);
    const isRightNodeUnival = isUnival(root.right);

    // if neither child node matches the root value, then it is not unival
    if (!isLeftNodeUnival || !isRightNodeUnival) {
      return false;
    }

    // if both child nodes match, count and check the next level 
    if (left && left.value !== root.value || right && right.value !== root.value) {
      return false;
    }
    count++;

    return true;
  }

  isUnival(tree, tree.value);
  return count;
}

console.log('count unival sub trees: ', countUnivalSubTrees(tree1));

// Can see problem explained in Python here https://www.dailycodingproblem.com/blog/unival-trees/

// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.
// A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Given Tree t:
//   4 
//  / \
// 1   2

// Example 1: 

// Tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2

// should return true

// Example 2: 

// Tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0

// should return false



