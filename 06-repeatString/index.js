/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
	let result = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		result = result + '-' + str[i].toUpperCase() + str[i].repeat(i).toLowerCase();
	}
	return result;
}
