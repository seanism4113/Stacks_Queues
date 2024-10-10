class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		const newNode = new Node(val);
		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
	}
	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */
	pop() {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}
		let removedNode = this.first;
		this.first = this.first.next;
		this.size--;
		return removedNode.val;
	}

	/** peek(): return the value of the first node in the queue. */
	peek() {
		return this.first.val;
	}
	/** isEmpty(): return true if the queue is empty, otherwise false */
	isEmpty() {
		return this.size === 0;
	}

	reverseString(string) {
		for (let char of string) {
			this.push(char);
		}

		let result = [];

		while (!this.isEmpty()) {
			result.push(this.pop());
		}
		return result.join("");
	}
}
