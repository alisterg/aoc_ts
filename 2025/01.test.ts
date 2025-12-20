import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './01'

const input = readFileSync(
    new URL('./inputs/01.txt', import.meta.url),
    'utf-8'
)

test('part 1 [exmp]', () => {
    const example = `
    `
    const res = part1(example)
    console.log('Part 1 [EXMP]:', res)
    expect(res).toBe(-1)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1 [SOLN]:', res)
    expect(res).toBe(-1)
})

test('part 2 [exmp]', () => {
    const example = `
    `
    const res = part2(example)
    console.log('Part 2 [EXMP]:', res)
    expect(res).toBe(-1)
})

test('part 2 [soln]', () => {
    const res = part2(input)
    console.log('Part 2:', res)
    expect(res).toBe(-1)
})

