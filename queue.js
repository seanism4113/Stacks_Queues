const linkedList = require("./linkedList");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
	constructor() {
		this._list = new linkedList();
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */
	enqueue(val) {
		this._list.addToTail(val);
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */
	dequeue() {
		return this._list.removeHead();
	}

	/** peek(): return the value of the first node in the queue. */
	peek() {
		return this._list.peek();
	}
	/** isEmpty(): return true if the queue is empty, otherwise false */
	isEmpty() {
		return this._list.isEmpty();
	}
}

module.exports = Queue;
