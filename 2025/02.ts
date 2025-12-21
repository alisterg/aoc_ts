
function isInvalid(num: number) {
    const str = `${num}`
    const halfLength = str.length / 2
    const firstHalf = str.slice(0, halfLength)
    const secondHalf = str.slice(halfLength)

    return firstHalf === secondHalf
}

/**
 * We are given a comma separated list of 'ranges' in the format
 * `n-m` where n and m are both valid numbers (not sure if +/-)
 * 
 * The ranges represent ranges of IDs. An invalid ID is a number
 * that repeats a sequence twice.
 * For example; 55, 123123, 6464 are all invalid.
 *
 * Add up the sum of all the invalid IDs
 */
export function part1(input: string): number {
    const ranges = input.trim().split(',')

    let result = 0
    ranges.forEach(range => {
        const [first, last] = range.split('-')
        for (let i = +first; i <= +last; i++) {
            if (isInvalid(i)) result += i
        }
    })

    return result
}

export function part2(input: string): number {
    const lines = input.trim().split('\n')
    // solve it
    return 0
}

