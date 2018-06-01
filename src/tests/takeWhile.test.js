import {computeFrom} from '../computeFrom'
import {takeWhile} from '../takeWhile'

test('takeWhile::whitout args', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(takeWhile())
	expect(data).toEqual([1, 2, 3, 4, 5])
})

test('takeWhile::main', () => {
	const data = computeFrom([1, 2, 3, 4, 5, 4, 3, 2, 1])(takeWhile(el => el < 4))
	expect(data).toEqual([1, 2, 3])
})
