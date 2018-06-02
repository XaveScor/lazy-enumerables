import {filterNot} from '../filterNot'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('filterNot::empty', () => {
	const data = lazyIterator([1, 2, 3])(filterNot(), toArray)
	expect(data).toEqual([])
})

test('filterNot::pred', () => {
	const data = lazyIterator([1, 2, 3])(filterNot(el => el % 2), toArray)
	expect(data).toEqual([2])
})
