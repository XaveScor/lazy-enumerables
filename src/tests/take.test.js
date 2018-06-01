import {computeFrom} from '../computeFrom'
import {take} from '../take'

test('take::n less sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(take(3))
	expect(data).toEqual([1, 2, 3])
})

test('take::n more sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(take(10))
	expect(data).toEqual([1, 2, 3, 4, 5])
})
