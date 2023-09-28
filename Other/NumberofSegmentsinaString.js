/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
	const len = s.length;
	let counter = 0;
	let inWord = false;

	for (let i = 0; i < len; i++) {
		if (s[i] !== ' ' && !inWord) {
			inWord = true;
			counter++;
			continue;
		}

		if (s[i] === ' ') {
			inWord = false;
		}
	}

	return counter;
};
