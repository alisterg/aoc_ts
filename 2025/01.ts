
function parseInput(inputStr: string) {
    return inputStr
        .trim()
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
}

function parseInstruction(instr: string): {direction: string, count: number} {
    const direction = instr[0]
    const count = parseInt(instr.slice(1))
    return { direction, count }
}

/**
 * There is a 'dial' with numerical values 0..99 (left -> right).
 * The 'instructions' we are given move the dial left or right.
 * It loops around when hitting the edge.
 *
 * We want to run the instructions, and return the number of 
 * times an instruction makes the dial land on zero.
 * 
 * The dial starts at 50
 */
export function part1(input: string): number {
    const lines = parseInput(input)

    let result = 0
    let pointer = 50
    lines.forEach(line => {
        const instruction = parseInstruction(line)

        if (instruction.direction === "L")
            pointer = (pointer - instruction.count) % 100
        else if (instruction.direction === "R")
            pointer = (pointer + instruction.count) % 100
        else
            throw new Error(`Invalid instruction: ${JSON.stringify(instruction)}`)

        if (pointer === 0)
            result++
    })

    return result
}

/**
 * Same as above but count all the times the dial PASSES zero
 */
export function part2(input: string): number {
    const lines = parseInput(input)

    let result = 0
    let pointer = 50
    lines.forEach(line => {
        const instruction = parseInstruction(line)

        if (instruction.direction === "L") {
            for (let i = 0; i < instruction.count; i++) {
                pointer--
                if (pointer < 0) {
                    pointer += 100
                }
                if (pointer === 0) {
                    result++
                }
            }
        }
        else if (instruction.direction === "R") {
            for (let i = 0; i < instruction.count; i++) {
                pointer++
                if (pointer >= 100) {
                    pointer -= 100
                }
                if (pointer === 0) {
                    result++
                }
            }
        }
        else {
            throw new Error(`Invalid instruction: ${JSON.stringify(instruction)}`)
        }
    })

    return result
}

