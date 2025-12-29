import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './06'

const input = readFileSync(
    new URL('./inputs/06.txt', import.meta.url),
    'utf-8'
)

const example = `
123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +
`

test('part 1 [exmp]', () => {
    const res = part1(example)
    expect(res).toBe(4277556)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(6378679666679)
})

// test('part 2 [exmp]', () => {
//     const res = part2(example)
//     expect(res).toBe(-1)
// })
// 
// test('part 2 [soln]', () => {
//     const res = part2(input)
//     console.log('Part 2:', res)
//     expect(res).toBe(-1)
// })
// 
