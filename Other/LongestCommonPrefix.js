/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	const len = strs.length;
	let str = strs[0] || '';

	for (let i = 1; i < len; i++) {
		const complen = Math.min(strs[i].length, str.length);
		let pref = '';
		for (let j = 0; j < complen; j++) {
			if (str[j] === strs[i][j]) {
				pref += str[j];
				continue;
			}
			break;
		}
		str = pref;
	}

	return str;
};
