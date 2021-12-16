export const capitalize = (str = '') => {
	const firstLetter = str.slice(0, 1).toUpperCase();
	const restLetters = str.slice(1).toLowerCase();
	return `${firstLetter}${restLetters}`;
};
