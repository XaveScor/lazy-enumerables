import {lazyIterator} from '../lazyIterator'
import {take} from '../take'
import {toArray} from '../toArray'

test('take::n less sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(take(3), toArray)
	expect(data).toEqual([1, 2, 3])
})

test('take::n more sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(take(10), toArray)
	expect(data).toEqual([1, 2, 3, 4, 5])
})
