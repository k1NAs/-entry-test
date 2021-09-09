// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
	let result = [];

	arr.forEach((element, index) => {
		if (index % size === 0) {
			result[result.length] = [element];
		} else {
			result[result.length - 1].push(element);
		}
	});
	return result;
};
