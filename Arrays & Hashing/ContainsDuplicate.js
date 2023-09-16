/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
const containsDuplicate = nums => {
    let map = new Map();
    let numlen = nums.length;

    for (let i = 0; i < numlen; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i]);
    }
    return false;
};