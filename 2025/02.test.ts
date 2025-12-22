import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1, part2 } from './02'

const input = readFileSync(
    new URL('./inputs/02.txt', import.meta.url),
    'utf-8'
)

const example = `
11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124
`

test('part 1 [exmp]', () => {
    const res = part1(example)
    expect(res).toBe(1227775554)
})

test('part 1 [soln]', () => {
    const res = part1(input)
    console.log('Part 1:', res)
    expect(res).toBe(5398419778)
})

test('part 2 [exmp]', () => {
    const res = part2(example)
    expect(res).toBe(4174379265)
})

test('part 2 [soln]', () => {
    const res = part2(input)
    console.log('Part 2:', res)
    expect(res).toBe(15704845910)
})

