class Node {
  constructor(value, node) {
    this.value = value;
    this.nextNode = node;
  }
}


class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value, null);
  }

  add(value) {
    let node = this.head.nextNode;

    if (node === null) {
      this.head.nextNode = new Node(value, null);
      return;
    } 

    while (node.nextNode) {
      node = node.nextNode;
    }

    node.nextNode = new Node(value, null);
  }

  getNode(index) {
    let node = this.head;

    while (index && node !== null) {
      node = node.nextNode;
      index--;
    }

    return node;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let node = this.getNode(index - 1);

    if (node !== null) {
      node.nextNode = node.nextNode.nextNode;
    }
  }
}

// Create a list to test with:
let list = new SinglyLinkedList('head');
list.add('second');
list.add(3);
list.add(4);

// To test remove:
// list.remove(3);

let node = list.head; 
while (node) {
  console.log(node.value);
  node = node.nextNode;
}

// Test getNode:
let gotNode = list.getNode(1);
if(gotNode){
  console.log('got', gotNode.value);
} else {
  console.log('did not get a node')
}



