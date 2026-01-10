/**
 * Too hard to explain, read the problem description
 */
export function part1(input: string): number {
    const grid = input.trim().split('\n').map(line => line.split(''));

    let startCol = grid[0].findIndex(e => e === 'S')
    let splitCount = 0;

    // Track active beams at each row as we process downward
    let currentBeams = new Set<number>([startCol]);

    // Process row by row
    for (let row = 1; row < grid.length; row++) {
        const nextBeams = new Set<number>();

        // If any existing beam hits a splitter, split it left and right
        for (const col of currentBeams) {
            if (grid[row][col] === '^') {
                splitCount++;
                if (col - 1 >= 0) nextBeams.add(col - 1);
                if (col + 1 < grid[0].length) nextBeams.add(col + 1);
            } else {
                nextBeams.add(col);
            }
        }

        currentBeams = nextBeams;

        // If no beams left, we're done
        if (currentBeams.size === 0) {
           break;
        }
    }

    return splitCount;
}

export function part2(input: string): number {
    throw new Error("Not implemented")
}

