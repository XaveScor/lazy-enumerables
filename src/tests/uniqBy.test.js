import {computeFrom} from '../computeFrom'
import {uniqBy} from '../uniqBy'

test('uniqBy::main', () => {
	const data = computeFrom([{id: 1}, {id: 1}, {id: 2}])(uniqBy(el => el.id))
	expect(data).toEqual([{id: 1}, {id: 2}])
})
