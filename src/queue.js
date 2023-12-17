const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.last != null) {
      this.last.next = newNode;
      this.last = newNode;
    }
    else {
      this.first = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (this.first != null) {
      let a = this.first;
      this.first = this.first.next;
      return a.value;
    }
  }
}

module.exports = {
  Queue
};
