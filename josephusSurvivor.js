class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			newNode.next = newNode;
		} else {
			this.tail.next = newNode;
			newNode.next = this.head;
			this.tail = newNode;
		}
		this.size++;
	}

	remove(node) {
		if (!this.head) return;
		let current = this.head;

		if (current === node) {
			this.tail.next = current.next;
			this.head = current.next;
			this.size--;
			return;
		}

		while (current.next !== node && current.next !== this.head) {
			current = current.next;
		}

		if (current.next === node) {
			current.next = node.next;
			if (node === this.tail) {
				this.tail = current;
			}
			this.size--;
		}
	}

	getSize() {
		return this.size;
	}
}

function findSurvivor(numPeople, step) {
	const list = new LinkedList();

	for (let i = 1; i <= numPeople; i++) {
		list.append(i);
	}

	let current = list.head;

	while (list.getSize() > 1) {
		for (let i = 0; i < step - 1; i++) {
			current = current.next;
		}

		list.remove(current);

		current = current.next;
	}

	return current.value;
}
