import {concat} from '../concat'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('concat::main', () => {
	const data = lazyIterator([1])(concat(lazyIterator([2])()), toArray)
	expect(data).toEqual([1, 2])
})
