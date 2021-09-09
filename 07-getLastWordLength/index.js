export const getLastWordLength = str => {
	let lastWord = str.split(" ").filter((word) => word !== '').pop() || '';
	return lastWord.length;
};
