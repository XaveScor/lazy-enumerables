import {lazyIterator} from '../lazyIterator'
import {slice} from '../slice'
import {toArray} from '../toArray'

test('slice::main', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(slice(1, 3), toArray)
	expect(data).toEqual([2, 3])
})
