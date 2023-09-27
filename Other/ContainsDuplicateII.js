/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    // Mapping = [val, index]
    let m = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        const val = nums[i];
        if (m.has(val)) {
            const idx = m.get(val);
            console.log(i, idx);
            if (i - idx <= k) {
                return true;
            }
        }
        m.set(val, i);
    }

    return false;
};