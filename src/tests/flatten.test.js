import {flatten} from '../flatten'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('flatten::flat', () => {
	const data = lazyIterator([1, 2, 3])(flatten, toArray)
	expect(data).toEqual([1, 2, 3])
})

test('flatten::1 level', () => {
	const data = lazyIterator([[1], 2, [3, 4]])(flatten, toArray)
	expect(data).toEqual([1, 2, 3, 4])
})

test('flatten::deep', () => {
	const data = lazyIterator([1, [2, [3]]])(flatten, toArray)
	expect(data).toEqual([1, 2, 3])
})
