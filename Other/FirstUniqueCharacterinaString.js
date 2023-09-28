/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let m = {};
	const len = s.length;

	for (let i = 0; i < len; i++) {
		const char = s[i];
		if (m[char]) {
			m[char] = -1;
			continue;
		}
		m[char] = 1;
	}

	for (let i = 0; i < len; i++) {
		if (m[s[i]] === 1) {
			return i;
		}
	}
	return -1;

	// Version with maps
	// let m = new Map();
	// const len = s.length;

	// for (let i = 0; i < len; i++) {
	//     if (m.has(s[i])) {
	//         m.set(s[i], -1);
	//         continue;
	//     }
	//     m.set(s[i], 1);
	// }

	// for (let i = 0; i < len; i++) {
	//     if (m.get(s[i]) === 1) {
	//         return i;
	//     }
	// }
	// return -1;
};
