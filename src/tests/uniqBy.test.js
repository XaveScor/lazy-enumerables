import {lazyIterator} from '../lazyIterator'
import {toArray} from '../toArray'
import {uniqBy} from '../uniqBy'

test('uniqBy::main', () => {
	const data = lazyIterator([{id: 1}, {id: 1}, {id: 2}])(uniqBy(el => el.id), toArray)
	expect(data).toEqual([{id: 1}, {id: 2}])
})
