import {computeFrom} from '../computeFrom'
import {flatMap} from '../flatMap'

test('flatMap::main', () => {
	const data = computeFrom([1, 2, 3])(flatMap(el => [el, el + 1]))
	expect(data).toEqual([1, 2, 2, 3, 3, 4])
})
