import {computeFrom} from '../computeFrom'
import {map} from '../map'

test('map::main', () => {
	const data = computeFrom([1, 2, 3])(map(el => el + 1))
	expect(data).toEqual([2, 3, 4])
})
