/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const len = s.length;
	let prevspace = false;
	let strlen = 0;

	for (let i = 0; i < len; i++) {
		if (s[i] === ' ') {
			prevspace = true;
			continue;
		}
		if (prevspace) {
			strlen = 0;
			prevspace = false;
		}
		strlen++;
	}
	return strlen;
};
