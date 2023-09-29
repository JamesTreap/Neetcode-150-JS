/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let arr = [];

	for (let ch of s) {
		if (ch === '[' || ch === '(' || ch === '{') {
			arr.push(ch);
			continue;
		}

		if (ch === ']' || ch === ')' || ch === '}') {
			if (arr.length === 0) return false;
			const key = arr.pop();

			if (ch === ']' && key !== '[') return false;
			else if (ch === '}' && key !== '{') return false;
			else if (ch === ')' && key !== '(') return false;
		}
	}

	return !arr.length;
};
