/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}

	let str = x.toString();
	let len = str.length;
	let mid = len / 2;

	for (let i = 0; i < mid; i++) {
		if (str[i] != str[len - i - 1]) {
			return false;
		}
	}

	return true;
};
