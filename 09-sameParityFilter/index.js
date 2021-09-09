export const sameParityFilter = (arr = []) => {
	let firstParity = Math.abs(arr[0] % 2);
	let result = arr.filter((number) => Math.abs(number % 2) === firstParity);

	return result;
}
