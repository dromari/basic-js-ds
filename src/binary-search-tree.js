const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootElement == null) {
      this.rootElement = newNode;
    }
    else {
      this.createNode(this.rootElement, newNode);
    }
  }

  createNode(current, newNode) {
    if (current.data > newNode.data) {
      if (current.left != null) {
        this.createNode(current.left, newNode);
      }
      else {
        current.left = newNode;
      }
    }
    else {
      if (current.right != null) {
        this.createNode(current.right, newNode)
      } else {
        current.right = newNode
      }
    }
  }

  has(data) {
    if (this.rootElement == null) {
      return false;
    }
    let current = this.rootElement;
    while (current != null) {
      if (current.data == data) {
        return true;
      }
      else if (current.data > data) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    if (this.rootElement == null) {
      return null;
    }
    let current = this.rootElement;
    while (current != null) {
      if (current.data == data) {
        return current;
      }
      else if (current.data < data) {
        current = current.right;
      }
      else {
        current = current.left;
      }
    }
    return null;
  }

  remove(data) {
    this.rootElement = this.deleteNode(this.rootElement, data);
  }

  deleteNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data)
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this.deleteNode(node.right, minRight.data)
      return node;
    }
  }

  min() {
    if (this.rootElement == null) {
      return null;
    }
    let current = this.rootElement;
    while (current != null) {
      if (current.left != null) {
        current = current.left;
      }
      else {
        return current.data;
      }
    }
  }

  max() {
    if (this.rootElement == null){
      return null;
    }
    let current = this.rootElement;
    while (current != null){
      if (current.right != null){
        current = current.right;
      }
      else {
        return current.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};