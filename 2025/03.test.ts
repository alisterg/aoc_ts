import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './03'

const input = readFileSync(
    new URL('./inputs/03.txt', import.meta.url),
    'utf-8'
)

const example = `
987654321111111
811111111111119
234234234234278
818181911112111
`

test('part 1 [exmp]', () => {
    const res = part1(example)
    expect(res).toBe(357)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(17109)
})

test('part 2 [exmp]', () => {
    const res = part2(example)
    expect(res).toBe(3121910778619)
})

test('part 2 [soln]', () => {
    const res = part2(input)
    console.log('Part 2:', res)
    expect(res).toBe(169347417057382)
})

