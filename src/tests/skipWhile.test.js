import {computeFrom} from '../computeFrom'
import {skipWhile} from '../skipWhile'

test('skipWhile::without args', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(skipWhile())
	expect(data).toEqual([])
})

test('skipWhile::main', () => {
	const data = computeFrom([1, 2, 3, 4, 5, 4, 3, 2, 1])(skipWhile(el => el < 4))
	expect(data).toEqual([4, 5, 4, 3, 2, 1])
})
