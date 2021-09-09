/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
	let min = numbers[0];
	let max = numbers[0];
	numbers.forEach((number) => {
		if (min > number) { min = number };
		if (max < number) { max = number };
	})
	return min + max;
}
