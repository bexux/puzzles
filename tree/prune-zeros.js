/**
 * Given a binary tree where all nodes are
 * either 0 or 1, prune the tree so that
 * subtrees containing all 0s are removed.
 *
 * Tree:
 *    0
 *   / \
 *  1   0
 *    /  \
 *   1    0
 *  / \
 * 0   0
 *
 * Results in:
 *   0
 *  / \
 * 1   0
 *    /
 *   1
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree1 = (() => {
  const root = new TreeNode(0);
  root.right = new TreeNode(0);
  root.left = new TreeNode(1);
  root.right.right = new TreeNode(0);
  root.right.left = new TreeNode(1);
  root.right.left.right = new TreeNode(0);
  root.right.left.left = new TreeNode(0);
  return root;
})();


function truncateTree(root) {
  if (root === null) { return; }

  const leftVal = root.left ? truncateTree(root.left) : null
  const rightVal = root.right ? truncateTree(root.right) : null

  root.left = leftVal
  root.right = rightVal

  if (root.left === null && root.right === null) {
    return root.value ? root : null
  }

  return root;
}

const result = truncateTree(tree1);
console.log('prune zeros ', result);

