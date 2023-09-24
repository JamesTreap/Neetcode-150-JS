/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Runtime: 79 ms Beats 87.63% of users with JavaScript
var productExceptSelf = function (nums) {
	// strategy: make a prefix array, then multiply it by suffix of values

	// declare variables
	let pref = [];
	const len = nums.length;

	// load prefix array
	let pre = 1;
	for (let i = 0; i < len; i++) {
		if (i === 0) {
			pref.push(1);
			continue;
		}

		pre *= nums[i - 1];
		pref.push(pre);
	}

	// work backwards
	let prod = 1;
	for (let i = len - 1; i >= 0; i--) {
		pref[i] *= prod;
		prod *= nums[i];
	}

	return pref;
};
