function parseInput(input: string) {
    return input
        .trim()
        .split('\n')
        .map(l => l.trim())
}

/**
 *
 * Given a string of rows of 'joltages', find the max 'joltage'
 * in each row and return the sum.
 *
 * e.g. 12345 would be 45
 *      3214  would be 34
 *
 * First digit is the largest number you can find (barring the last); second
 * digit is the largest number after that
 *
 */
export function part1(input: string): number {
    const lines = parseInput(input)

    const largestDigit = (line: string, isFirst: boolean, after: number) => {
        if (isFirst) line = line.slice(0, -1)

        let largest = 0
        let largestPos = -1
        for (let i = 0; i < line.length; i++) {
            if (i <= after) continue
            const digit = parseInt(line[i])
            if (digit > largest) {
                largest = digit
                largestPos = i
            }
        }

        return largestPos
    }

    let total = 0
    lines.forEach(line => {
        // find the largest digit barring the last
        const first = largestDigit(line, true, -1)
        const firstDigit = line[first]
        const second = largestDigit(line, false, first)
        const secondDigit = line[second]
        total += +(String(firstDigit) + String(secondDigit))
    })

    return total
}

/**
 * Same as above but using variable number of digits
 */
export function part2(input: string): number {
    const lines = parseInput(input)

    // Gave up; found solution online
    const largestNDigits = (line: string, n: number): string => {
        let toRemove = line.length - n
        const stack: string[] = []

        for (const char of line) {
            while (toRemove > 0 && stack.length && stack[stack.length - 1] < char) {
                stack.pop()
                toRemove--
            }
            stack.push(char)
        }

        return stack.slice(0, n).join('')
    }

    let total = 0
    lines.forEach(line => {
        // find the largest n digits in order
        const result = largestNDigits(line, 12)
        total += +(result.split().reduce((acc, curr) => acc + String(curr), ""))
    })

    return total
}

