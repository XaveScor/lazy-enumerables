import {computeFrom} from '../computeFrom'
import {flatten} from '../flatten'

test('flatten::flat', () => {
	const data = computeFrom([1, 2, 3])(flatten)
	expect(data).toEqual([1, 2, 3])
})

test('flatten::1 level', () => {
	const data = computeFrom([[1], 2, [3, 4]])(flatten)
	expect(data).toEqual([1, 2, 3, 4])
})

test('flatten::deep', () => {
	const data = computeFrom([1, [2, [3]]])(flatten)
	expect(data).toEqual([1, 2, 3])
})
