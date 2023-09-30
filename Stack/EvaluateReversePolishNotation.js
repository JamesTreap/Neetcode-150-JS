/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let nums = [];
    
    for (let ch of tokens) {
        if (ch === '*' || ch === '+' || ch === '-' || ch === '/') {
            const val1 = nums.pop();
            const val2 = nums.pop();

            if (ch === '*') nums.push(val2 * val1);
            if (ch === '+') nums.push(val2 + val1);
            if (ch === '-') nums.push(val2 - val1);
            if (ch === '/') nums.push(Math.trunc(val2 / val1));

            continue;
        }

        nums.push(parseInt(ch));
    }

    return nums[0];
};