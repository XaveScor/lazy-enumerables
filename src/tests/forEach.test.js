import {forEach} from '../forEach'
import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'

test('forEach::main', () => {
	/* eslint-disable no-empty-function */
	const data = lazyIterator([1, 2, 3])(forEach(() => {}), toArray)
	expect(data).toEqual([1, 2, 3])
})
