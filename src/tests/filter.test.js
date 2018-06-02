import {filter} from '../filter'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('filter::main', () => {
	const data = lazyIterator([1, 2, 3])(filter(el => el % 2), toArray)
	expect(data).toEqual([1, 3])
})
