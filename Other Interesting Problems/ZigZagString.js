// Question premise:
// Given a string and number of rows ‘n’. Print the string formed by concatenating n rows when input string is written in row-wise Zig-Zag fashion.

// Examples:
// Input: str = "ABCDEFGH"
//        n = 2
// Output: "ACEGBDFH"
// Explanation: Let us write input string in Zig-Zag fashion
//              in 2 rows.
// A   C   E   G
//   B   D   F   H
//
// Now concatenate the two rows and ignore spaces
// in every row. We get "ACEGBDFH"
//
// Input: str = "GEEKSFORGEEKS"
//        n = 3
// Output: GSGSEKFREKEOE
// Explanation: Let us write input string in Zig-Zag fashion
//              in 3 rows.
// G       S       G       S
//   E   K   F   R   E   K
//     E       O       E

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
