/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	// initialize maps
	const len1 = nums1.length;
	const len2 = nums2.length;
	let m1 = new Map();
	let m2 = new Map();
	let arr = [];

	// load data into the maps
	for (let i = 0; i < len1; ++i) {
		m1.set(nums1[i], 0);
	}
	for (let i = 0; i < len2; ++i) {
		m2.set(nums2[i], 0);
	}
	for (let key of m1.keys()) {
		if (m2.has(key)) arr.push(key);
	}

	return arr;
};
