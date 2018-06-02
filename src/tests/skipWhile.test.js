import {lazyIterator} from '../lazyIterator'
import {skipWhile} from '../skipWhile'
import {toArray} from '../toArray'

test('skipWhile::without args', () => {
	const data = lazyIterator([1, 2, 3, 4, 5])(skipWhile(), toArray)
	expect(data).toEqual([])
})

test('skipWhile::main', () => {
	const data = lazyIterator([1, 2, 3, 4, 5, 4, 3, 2, 1])(skipWhile(el => el < 4), toArray)
	expect(data).toEqual([4, 5, 4, 3, 2, 1])
})
