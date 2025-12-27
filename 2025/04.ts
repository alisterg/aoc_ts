const DIRECTIONS = [
    {x:0, y:1},
    {x:1, y:0},
    {x:0, y:-1},
    {x:-1,y: 0},
    {x:1, y:1},
    {x:1, y:-1},
    {x:-1,y: 1},
    {x:-1,y: -1},
]

function parseInput(input: string): string[][] {
    return input
        .trim()
        .split('\n')
        .map(line => line.split(''))
}

function isValidPosition(grid: string[][], x: number, y: number) {
    if (grid[x][y] !== '@') return false

    let numAts = 0
    DIRECTIONS.forEach(dir => {
        const nextX = x + dir.x
        const nextY = y + dir.y
        if (nextX < 0 || nextX >= grid.length) return
        if (nextY < 0 || nextY >= grid[x].length) return

        const nextPos = grid[nextX][nextY]
        if (nextPos === '@') numAts++
    })

    return numAts < 4
}
    
/**
 * Given a matrix, find the '@' with fewer than four other '@' in the eight
 * adjacent positions
 */
export function part1(input: string, parsed = false): number {
    const grid = parsed ? input : parseInput(input)
    let total = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (isValidPosition(grid, i, j)) total++
        }
    }

    return total
}

function removePosition(grid: string[][], x: number, y: number) {
    if (!isValidPosition(grid, x, y, true)) return false
    grid[x][y] = '.'
    return true
}

/**
 * Instead of finding the number of valid positions, find out how many
 * valid positions we can 'remove' (convert to '.') such that removing
 * the position would still leave valid position(s) on the grid.
 */
export function part2(input: string): number {
    throw new Error("not implemented")
}

