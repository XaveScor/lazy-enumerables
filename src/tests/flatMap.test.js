import {flatMap} from '../flatMap'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('flatMap::main', () => {
	const data = lazyIterator([1, 2, 3])(flatMap(el => [el, el + 1]), toArray)
	expect(data).toEqual([1, 2, 2, 3, 3, 4])
})
