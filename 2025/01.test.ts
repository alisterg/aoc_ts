import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './01'

const input = readFileSync(
    new URL('./inputs/01.txt', import.meta.url),
    'utf-8'
)

const EXAMPLE = `
    L68
    L30
    R48
    L5
    R60
    L55
    L1
    L99
    R14
    L82
`

test('part 1 [exmp]', () => {
    const res = part1(EXAMPLE)
    expect(res).toBe(3)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(1092)
})

test('part 2 [exmp]', () => {
    const res = part2(EXAMPLE)
    expect(res).toBe(6)
})

test('part 2 [soln]', () => {
    const res = part2(input)
    console.log('Part 2:', res)
    expect(res).toBe(6616)
})

