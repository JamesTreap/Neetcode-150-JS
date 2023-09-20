function zigzagString(inputStr, theDepth) {
	let len = inputStr.length;
	let twon = 2 * (theDepth - 1);
	let ceil = Math.ceil(len / (twon * 1.0));
	let theStr = '';

	if (theDepth === 1) {
		return inputStr;
	}

	for (let i = 0; i < theDepth; i++) {
		let down = true;
		let idx;

		for (let j = 0; j <= ceil * 2; j++) {
			if (i === 0 || i === theDepth - 1) {
				idx = i + twon * j;
			} else if (down) {
				idx = i + (theDepth - 1) * j;
			} else {
				idx = (theDepth - 1) * (j + 1) - i;
			}

			// console.log('the value of idx is: ' + idx + ' value of j is: ' + j);
			if (idx >= len || idx < 0) {
				continue;
			}

			down = !down;
			theStr = theStr + inputStr[idx];
		}
	}
	console.log(theStr);
}

zigzagString('ABCDEFGH', 1);
zigzagString('A', 200);
zigzagString('ABCDEFGH', 2);
zigzagString('coderbyte', 3);
zigzagString('NOSLEEPFORTHEWEEK', 4);
zigzagString('ABCDEFGH', 8);
