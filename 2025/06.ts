enum Operator {
    Add,
    Multiply
}

type Operation = (number | Operator)[]

function parseInput(input: string): Operation[] {
    // Split input into a grid
    const grid = input
        .trim()
        .split('\n')
        .map(line => line.split(' ').filter(_ => _))

    // Rotate grid and convert the element types
    // We can't use 'grid.map' because it's not a square
    return grid[0].map((_, idx) => grid.map(r => {
        if (r[idx] === '+') return Operator.Add
        else if (r[idx] === '*') return Operator.Multiply
        else return Number(r[idx])
    }))
}

/**
 * Given an input with 'columns that are math operations' (the operator is the
 * bottom element), return the sum of all operations
 */
export function part1(input: string): number {
    const grid = parseInput(input)

    let total = 0
    grid.forEach(row => {
        const operator = row.pop()
        let subtotal = row.reduce((acc, curr) => {
            if (operator === Operator.Add)
                return acc + curr
            else if (operator === Operator.Multiply) {
                if (acc === 0) acc = 1
                if (curr === 0) curr = 1
                return acc * curr
            }
            else
                return acc
        }, 0)
        total += subtotal
    })

    return total
}

export function part2(input: string): number {
    throw new Error("Not implemented")
}

