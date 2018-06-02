import {lazyIterator} from '../lazyIterator'
import {takeWhile} from '../takeWhile'
import {toArray} from '../toArray'

test('takeWhile::whitout args', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(takeWhile(), toArray)
	expect(data).toEqual([1, 2, 3, 4, 5])
})

test('takeWhile::main', () => {
	const data = lazyIterator([1, 2, 3, 4, 5, 4, 3, 2, 1])(takeWhile(el => el < 4), toArray)
	expect(data).toEqual([1, 2, 3])
})
