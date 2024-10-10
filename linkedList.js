/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class linkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addToTail(val) {
		const newNode = new Node(val);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}

	addToHead(val) {
		const newNode = new Node(val);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.next = this.head;
			this.head = newNode;
		}
		this.size++;
	}

	removeHead() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		const removedNode = this.head;
		this.head.next = this.head;
		this.size--;

		if (this.isEmpty()) {
			this.tail = null;
		}
		return removedNode.val;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		return this.head.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = linkedList;
