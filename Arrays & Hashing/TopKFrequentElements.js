/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/* Runtime: beats 92.44% of users with JavaScript */
var topKFrequent = function (nums, k) {
	// declare variables
	let m = new Map();
	let arr = [];
	let counter = 0;

	// iterate through nums, store the frequency in a map
	for (let i of nums) {
		m.set(i, m.get(i) + 1 || 1);
	}

	// sort the map
	m = new Map([...m.entries()].sort((a, b) => b[1] - a[1]));

	// add entries to the map
	for (let [i, j] of m) {
		arr.push(i);
		counter++;

		if (counter >= k) {
			break;
		}
	}
	return arr;
};
