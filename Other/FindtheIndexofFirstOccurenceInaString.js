/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const haylen = haystack.length;
	const nedlen = needle.length;

	if (haylen < nedlen) {
		return -1;
	}

	if (haystack === needle) {
		return 0;
	}

	for (let i = 0; i < haylen - nedlen + 1; i++) {
		if (haystack.substring(i, i + nedlen) === needle) {
			return i;
		}
	}
	return -1;
};
