import {computeFrom} from '../computeFrom'
import {first} from '../first'

test('first::empty', () => {
	const data = computeFrom([1, 2, 3])(first())
	expect(data).toEqual([1])
})

test('first::cond', () => {
	const data = computeFrom([1, 2, 3])(first(el => el === 2))
	expect(data).toEqual([2])
})
