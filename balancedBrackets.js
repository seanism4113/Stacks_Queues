const balancedBrackets = (string) => {
	const stack = [];
	const brackets = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let char of string) {
		if (char in brackets) {
			if (stack.length === 0 || stack[stack.length - 1] !== brackets[char]) {
				return false;
			}
			stack.pop();
		} else if (Object.values(brackets).includes(char)) {
			stack.push(char);
		}
	}
	return stack.length === 0;
};

stack[""];
