/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const slen = s.length;
    if (slen != t.length) {
        return false;
    }

    let charMap = new Map();

    for (let i = 0; i < slen; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    for (let i = 0; i < slen; i++) {
        const val = charMap.get(t[i]);
        if (val === undefined || val === 0) {
            return false;
        } else {
            charMap.set(t[i], val - 1);
        }
    }

    return true;
};