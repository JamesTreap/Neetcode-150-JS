/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let m1 = {};
	let arr = [];

	for (let n of nums1) {
		if (m1[n]) m1[n]++;
		else m1[n] = 1;
	}

	for (let n of nums2) {
		if (m1[n]) {
			arr.push(n);
			m1[n]--;
			if (m1[n] === 0) delete m1[n];
		}
	}

	return arr;
};
