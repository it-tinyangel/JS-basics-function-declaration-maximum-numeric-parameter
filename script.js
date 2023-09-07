function findMax(...num) { // to pass any number of numbers to the function


	let max = num[0]; // an initial value of max to compare

	for (let i = 0; i < num.length; i++) { // iterating through all the passed arguments in the num array

		if (num[i] > max) { // if num[i] is greater than max, then max is updated with the value of num[i]
			max = num[i];
		}
	}

	document.write(`Найбільше число: ${max}`); // outputing the result on the page  containing max number
}

findMax(2, 16, 15, 8, 25); // calling findMax function