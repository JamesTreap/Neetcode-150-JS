/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const len = s.length;
	let str = '';
	let endword = false;

	for (let i = len - 1; i >= 0; i--) {
		if (s[i] != ' ') {
			str += s[i];
			endword = false;
			continue;
		}

		if (s[i] === ' ' && !endword) {
			str += ' ';
			endword = true;
		}
	}

	str = str.trim();
	return str;
};
