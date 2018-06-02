import {lazyIterator} from '../lazyIterator'
import {skipRight} from '../skipRight'
import {toArray} from '../toArray'

test('skipRight::n less sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(skipRight(3), toArray)
	expect(data).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('skipRight::n more sequense length', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(skipRight(10), toArray)
	expect(data).toEqual([])
})
