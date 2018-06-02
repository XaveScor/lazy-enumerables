import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'
import {uniq} from '../uniq'

test('uniq::main', () => {
	const data = lazyIterator([1, 1, 2, 2, 3])(uniq, toArray)
	expect(data).toEqual([1, 2, 3])
})
