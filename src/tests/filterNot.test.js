import {computeFrom} from '../computeFrom'
import {filterNot} from '../filterNot'

test('filterNot::empty', () => {
	const data = computeFrom([1, 2, 3])(filterNot())
	expect(data).toEqual([])
})

test('filterNot::pred', () => {
	const data = computeFrom([1, 2, 3])(filterNot(el => el % 2))
	expect(data).toEqual([2])
})
