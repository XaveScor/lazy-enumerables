import {computeFrom} from '../computeFrom'
import {skipRight} from '../skipRight'

test('skipRight::n less sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(skipRight(3))
	expect(data).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('skipRight::n more sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(skipRight(10))
	expect(data).toEqual([])
})
