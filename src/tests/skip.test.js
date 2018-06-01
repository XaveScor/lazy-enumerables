import {computeFrom} from '../computeFrom'
import {skip} from '../skip'

test('skip::n less sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(skip(3))
	expect(data).toEqual([4, 5])
})

test('skip::n more sequense length', () => {
	const data = computeFrom([1, 2, 3, 4, 5])(skip(10))
	expect(data).toEqual([])
})
