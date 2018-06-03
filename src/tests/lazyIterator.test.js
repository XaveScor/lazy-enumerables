import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('lazyIterator::main', () => {
	const source = [1, 2, 3, 4, 5]
	const data = lazyIterator(source)(toArray)
	expect(data).toEqual(source)
})

test('lazyIterator::string', () => {
	const data = lazyIterator('test')(toArray)
	expect(data).toEqual(['t', 'e', 's', 't'])
})
