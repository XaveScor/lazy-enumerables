import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('lazyGenerator::main', () => {
	const source = [1, 2, 3, 4, 5]
	const data = lazyIterator(source)(toArray)
	expect(data).toEqual(source)
})
