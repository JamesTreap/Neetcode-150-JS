/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
	s = s.toLowerCase();
	s = s.replaceAll(/[^a-z0-9]/g, '');
	const len = s.length;
	const mid = len / 2;

	for (let i = 0; i < mid; i++) {
		if (s[i] != s[len - i - 1]) return false;
	}
	return true;
};
