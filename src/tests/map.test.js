import {lazyIterator} from '../lazyIterator'
import {map} from '../map'
import {toArray} from '../toArray'

test('map::main', () => {
	const data = lazyIterator([1, 2, 3])(map(el => el + 1), toArray)
	expect(data).toEqual([2, 3, 4])
})
