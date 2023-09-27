/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const str = s.trim();
	const arr = str.split(' ');
	const len = arr.length;
	let returnstr = '';

	for (let i = len - 1; i >= 0; i--) {
		returnstr += arr[i];

		if (i != 0 && arr[i] != '') {
			returnstr += ' ';
		}
	}

	return returnstr;
};
