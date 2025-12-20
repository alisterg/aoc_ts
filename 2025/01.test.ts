import { readFileSync } from 'fs'
import { test, expect } from 'vitest'
import { part1 } from './01'

const input = readFileSync(
    new URL('./inputs/01.txt', import.meta.url),
    'utf-8'
)

test('part 1', () => {
  console.log('Part 1:', part1(input))
  expect(part1(input)).toBe(-1)
})

test('part 2', () => {
  console.log('Part 2:', part1(input))
  expect(part1(input)).toBe(-1)
})

