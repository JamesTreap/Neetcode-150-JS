/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let len = nums.length + 1;
	let arr = new Array(len).fill(false);

	for (let i = 0; i < len; i++) {
		arr[nums[i]] = true;
	}

	for (let i = 0; i < len; i++) {
		if (arr[i] === false) {
			return i;
		}
	}
};
