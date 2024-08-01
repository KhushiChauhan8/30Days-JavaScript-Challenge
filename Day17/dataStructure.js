// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (this.head === null) {
        return null;
      } else if (this.head.next === null) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next.next !== null) {
          current = current.next;
        }
        current.next = null;
      }
    }
  
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage of Linked List
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.display(); // Output: 1 2 3
  linkedList.remove();
  linkedList.display(); // Output: 1 2
  
  // Activity 2: Stack
  
  // Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  
  // Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
  function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
      stack.push(char);
    }
    let reversedStr = "";
    while (stack.items.length > 0) {
      reversedStr += stack.pop();
    }
    return reversedStr;
  }
  
  // Example usage of Stack
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Output: 3
  console.log(stack.pop()); // Output: 3
  console.log(stack.peek()); // Output: 2
  
  const str = "hello";
  console.log(reverseString(str)); // Output: "olleh"
  
  // Activity 3: Queue
  
  // Task 5: Implement a Queue class with methods enqueve (add element), dequeue (remove element), and front (view the first element).
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  }
  
  // Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
  function printerQueue() {
    const queue = new Queue();
    queue.enqueue("Print job 1");
    queue.enqueue("Print job 2");
    queue.enqueue("Print job 3");
  
    while (queue.items.length > 0) {
      console.log("Processing: " + queue.dequeue());
    }
  }
  
  // Example usage of Queue
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.front()); // Output: 2
  
  printerQueue(); // Output: Processing: Print job 1
                  //         Processing: Print job 2
                  //         Processing: Print job 3
  
  // Activity 4: Binary Tree
  
  // Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
    }
  }
  
  // Example usage of Binary Tree
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(1);
  binaryTree.insert(4);
  binaryTree.inOrder(binaryTree.root); // Output: 1 3 4 5 7
  
  // Activity 5: Graph (Optional)
  
  // Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
  class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
      }
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  // Example usage of Graph
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.bfs('A'); // Output: A B C D
  