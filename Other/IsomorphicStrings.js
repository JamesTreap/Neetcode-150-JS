/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	const len = s.length;

	if (keymap(s, t, len)) return false;
	if (keymap(t, s, len)) return false;

	return true;
};

function keymap(s, t, len) {
	let m = new Map();
	for (let i = 0; i < len; ++i) {
		if (m.has(s[i])) {
			if (m.get(s[i]) != t[i]) return true;
			continue;
		}
		m.set(s[i], t[i]);
	}
	return false;
}
