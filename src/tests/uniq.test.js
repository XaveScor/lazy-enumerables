import {computeFrom} from '../computeFrom'
import {uniq} from '../uniq'

test('uniq::main', () => {
	const data = computeFrom([1, 1, 2, 2, 3])(uniq)
	expect(data).toEqual([1, 2, 3])
})
