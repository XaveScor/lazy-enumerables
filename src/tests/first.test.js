import {first} from '../first'
import {lazyIterator} from '../lazyIterator'

test('first::empty', () => {
	const data = lazyIterator([1, 2, 3])(first())
	expect(data).toEqual(1)
})

test('first::cond', () => {
	const data = lazyIterator([1, 2, 3])(first(el => el === 2))
	expect(data).toEqual(2)
})

test('first::not found', () => {
	const data = lazyIterator([])(first())
	expect(data).toBeNull()
})
