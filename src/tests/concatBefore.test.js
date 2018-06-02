import {concatBefore} from '../concatBefore'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('concatBefore::main', () => {
	const data = lazyIterator([1])(concatBefore(lazyIterator([2])()), toArray)
	expect(data).toEqual([2, 1])
})
