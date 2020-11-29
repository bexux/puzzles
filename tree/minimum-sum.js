/**
 * Given a binary tree, return the level of the tree with minimum sum
 */


// Creating trees to work with
//    value
//   /     \
// left   right

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Input :          1
 *               /   \
 *             2      3
 *           /  \      \
 *          4    5      8
 *                    /   \
 *                   6     7
*/
const tree1 = (() => {
  const root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(8);

  root.right.right.right = new TreeNode(7);
  root.right.right.left = new TreeNode(6);

  return root;
})();

const tree2 = new TreeNode();
const tree3 = (() => {
  const root = new TreeNode(9);

  root.left = new TreeNode(1);
  root.right = new TreeNode(6);

  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(1);
  root.right.right = new TreeNode(1);

  root.right.right.right = new TreeNode(3);
  root.right.right.left = new TreeNode(2);

  return root;
})();


// Solution

function minimumSumLevel(root) {
  if (root === null) { return; }
  let queue = [];
  let minSumArray = [];

  queue.push({...root, level: 0});

  while (queue.length > 0) {
    let currentNode = queue.shift();
    let currentSum = minSumArray[currentNode.level];

    minSumArray[currentNode.level] = currentSum ? currentSum + currentNode.value : currentNode.value

    if (currentNode.left) {
      queue.push({ ...currentNode.left, level: currentNode.level + 1 });
    }

    if (currentNode.right) {
      queue.push({ ...currentNode.right, level: currentNode.level + 1 });
    }
  }

  const minSum = Math.min(...minSumArray);
  return minSumArray.indexOf(minSum) + 1;
}
console.log('Min sum of tree is on level:', minimumSumLevel(tree1)); // 1
console.log('Min sum of tree is on level:', minimumSumLevel(tree2)); // 0 doesn't exist
console.log('Min sum of tree is on level:', minimumSumLevel(tree3)); // 3

