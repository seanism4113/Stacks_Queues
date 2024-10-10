const linkedList = require("./linkedList");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
	constructor() {
		this._list = new linkedList();
	}

	/** push(val): add new value to end of the stack. Returns undefined. */
	push(val) {
		this._list.addToHead(val);
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */
	pop() {
		return this._list.removeHead();
	}

	/** peek(): return the value of the first node in the stack. */
	peek() {
		return this._list.peek();
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */
	isEmpty() {
		return this._list.isEmpty();
	}
}

module.exports = Stack;
