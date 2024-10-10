const calc = (arg) => {
	const portions = arg.split(" ").reverse();
	const stack = [];

	for (let portion of portions) {
		if (!isNaN(portion)) {
			stack.push(parseFloat(portion));
		} else {
			const operand1 = stack.pop();
			const operand2 = stack.pop();

			let result;
			switch (portion) {
				case "+":
					result = operand1 + operand2;
					break;
				case "-":
					result = operand1 - operand2;
					break;
				case "*":
					result = operand1 * operand2;
					break;
				case "/":
					if (operand2 === 0) {
						throw new Error("Division by zero");
					}
					result = operand1 / operand2;
					break;
				default:
					throw new Error(`Unsupported operator: ${portion}`);
			}
			stack.push(result);
		}
	}
	return stack.pop();
};
