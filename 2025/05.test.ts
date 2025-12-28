import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './05'

const input = readFileSync(
    new URL('./inputs/05.txt', import.meta.url),
    'utf-8'
)

// id ranges(inclusive); blank line; available ingredients
const example = `
3-5
10-14
16-20
12-18

1
5
8
11
17
32
    `

test('part 1 [exmp]', () => {
    const res = part1(example)
    expect(res).toBe(3)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(638)
})

test('part 2 [exmp]', () => {
    const res = part2(example)
    expect(res).toBe(14)
})

test('part 2 [soln]', () => {
    const res = part2(input)
    console.log('Part 2:', res)
    expect(res).toBe(352946349407338)
})

