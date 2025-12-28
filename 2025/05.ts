type IngredientRange = {
    min: number
    max: number
}

type Input = {
    ranges: IngredientRange[]
    ingredients: number[]
}

function parseInput(input: string) : Input {
    const inputArr = input.split('\n')

    // Split the input by the blank line
    const idx = inputArr.findIndex((line, idx) =>
            idx !== 0 &&
            idx !== line.length - 1 &&
            line.trim() === '')
    if (idx === -1) throw new Error("couldn't read input")

    const ranges: IngredientRange[] = inputArr
        .slice(0, idx)
        .filter(range => range.trim())
        .map(range => {
            const result = range.split('-')
            return {
                min: Number(result[0]),
                max: Number(result[1])
            }
        })

    const ingredients: number[] = inputArr
        .slice(idx)
        .filter(ingr => ingr.trim())
        .map(ingr => Number(ingr))

    return {
        ranges,
        ingredients
    }
}

/**
 * Get the number of 'available ingredients' that are included in the ranges of
 * ingredients
 *
 * Input is: ingredient ID ranges; blank line; available ingredients
 *
 * The ranges are inclusive (min and max), and the ranges can overlap
 */
export function part1(input: string): number {
    const inp = parseInput(input)
    const valid = new Set()
    inp.ingredients.forEach(ing => {
        inp.ranges.forEach(range => {
            if (ing >= range.min && ing <= range.max) valid.add(ing)
        })
    })
    return valid.size
}

/**
 * Same as above but ignoring the 'available ingredients' and just getting the
 * number of total ingredients within the ranges
 *
 * Need to use an interval merging algorithm
 */
export function part2(input: string): number {
    const inp = parseInput(input)
    let total = 0

    // sort the ranges first
    inp.ranges.sort((a, b) => a.min - b.min)

    // loop over the ranges (ignoring overlaps) and count
    let currentStart = inp.ranges[0].min
    let currentEnd = inp.ranges[0].max
    for (let i = 0; i <= inp.ranges.length; i++) {
        const r = inp.ranges[i]
        if (r === undefined) continue
        if (r.min <= currentEnd + 1) {
            currentEnd = Math.max(currentEnd, r.max)
        } else {
            total += currentEnd - currentStart + 1
            currentStart = r.min
            currentEnd = r.max
        }
    }

    total += currentEnd - currentStart + 1

    return total
}

