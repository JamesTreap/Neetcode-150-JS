/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
	const height = grid.length;
	const width = grid[0].length;
	let counter = 0;

	let islands = 0;
	let neighbours = 0;

	// strategy: counting the island tiles, faster
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (grid[i][j] === 1) {
				islands++;
				if (i < height - 1 && grid[i + 1][j] === 1) neighbours++;
				if (j < width - 1 && grid[i][j + 1] === 1) neighbours++;
			}
		}
	}
	counter = 4 * islands - 2 * neighbours;

	// strategy: counting the edges, slower
	// for (let i = 0; i < height; i++) {
	//     for (let j = 0; j < width; j++) {
	//         // access tiles with a[i][j]
	//         if (grid[i][j] != 1) {
	//             continue;
	//         }

	//         // for tiles on top and bottom
	//         if (i === 0 || grid[i - 1][j] === 0) counter++;
	//         if (i === height - 1 || grid[i + 1][j] === 0) counter++;

	//         // for tiles on left and right
	//         if (j === 0 || grid[i][j - 1] === 0) counter++;
	//         if (j === width - 1 || grid[i][j + 1] === 0) counter++;
	//     }
	// }
	return counter;
};
