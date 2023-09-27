/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let m = new Map();
	let left = 0;
	let maxSize = 0;
	const len = s.length;

	if (len < 2) {
		return len;
	}

	for (let i = 0; i < len; i++) {
		while (m.has(s[i])) {
			m.delete(s[left]);
			left++;
		}
		m.set(s[i]);
		maxSize = Math.max(maxSize, i - left + 1);
	}
	return maxSize;
};
