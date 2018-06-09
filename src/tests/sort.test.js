import {lazyIterator} from '../lazyIterator'
import {sort} from '../sort'
import {toArray} from '../toArray'

test('map::small sequence', () => {
	const data = lazyIterator([5, 4, 3, 2, 1])(sort(), toArray)
	expect(data).toEqual([1, 2, 3, 4, 5])
})

test('map::big sequence', () => {
	const arr = Array.from({length: 100}, (x, i) => i)
	const data = lazyIterator([...arr].reverse())(sort(), toArray)
	expect(data).toEqual(arr)
})
