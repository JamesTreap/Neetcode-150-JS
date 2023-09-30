var MinStack = function () {
	arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	const len = arr.length;
	if (len === 0) {
		arr.push([val, val]);
		return;
	}
	arr.push([val, Math.min(arr[len - 1][1], val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return arr[arr.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return arr[arr.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
