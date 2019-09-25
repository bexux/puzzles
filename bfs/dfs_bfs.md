### Vocab

_stack_: 

_leaf node_: a node that has no children

_discovered node_: is a node that we add to our queue, whose location we know, but we have yet to actually visit (BFS)

### Stacks and Overflows

Reference: (Stacks and Overflows) [https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67]

### DFS versus BFS 

Reference: (Breaking down breadth first search)[https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9]

#### DFS
 - 3 approaches: inorder, postorder, and preorder
 - Since DFS can be written as a recursive function, the call stack can grow to be as big as the longest path in the tree
 - The call stack actually implements a stack data structure, meaning each of the nodes that we “check” or “visit” gets added to the stack
    - Once we reach a leaf node we start popping off the nodes from the top of the stack and end up at the root node again

#### BFS
 - Need to keep a reference to all children nodes of every node we visit so we can access them again later
 - Leans on queue data structures (because we are keeping a list)
 - We add nodes we have discovered but not yet visited to our queue and come back to them later



