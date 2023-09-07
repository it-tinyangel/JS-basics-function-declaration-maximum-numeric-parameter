function findMax() { // finding the maximum number

	let max = Number.NEGATIVE_INFINITY; // checking to define a minimum value

	for (let i = 0; i < arguments.length; i++) { // iterating through all the arguments passed to the function through arguments

		if (arguments[i] > max) { // if the (arguments[i] is greater than max, then max is updated with the value of the argument
			max = arguments[i];
		}
	}

	return max; // the function returns the maximum value max found
}

document.write(`Найбільше число: ${findMax(2, 18, -2, 0, 21, 3)}`); // result is displayed on the page