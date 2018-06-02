import {lazyIterator} from '../lazyIterator'
import {skip} from '../skip'
import {toArray} from '../toArray'

test('skip::n less sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(skip(3), toArray)
	expect(data).toEqual([4, 5])
})

test('skip::n more sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(skip(10), toArray)
	expect(data).toEqual([])
})
