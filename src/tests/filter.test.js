import {computeFrom} from '../computeFrom'
import {filter} from '../filter'

test('filter::main', () => {
	const data = computeFrom([1, 2, 3])(filter(el => el % 2))
	expect(data).toEqual([1, 3])
})
