import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './04'

const input = readFileSync(
    new URL('./inputs/04.txt', import.meta.url),
    'utf-8'
)

const example = `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
    `

test('part 1 [exmp]', () => {
    const res = part1(example)
    expect(res).toBe(13)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(1346)
})

// test('part 2 [exmp]', () => {
//     const res = part2(example)
//     expect(res).toBe(43)
// })
// 
// test('part 2 [soln]', () => {
//     const res = part2(input)
//     console.log('Part 2:', res)
//     expect(res).toBe(-1)
// })

