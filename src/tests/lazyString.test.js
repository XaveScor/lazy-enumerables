import {lazyString} from '../lazyString'
import {toArray} from '../toArray'

test('lazyGenerator::main', () => {
	const data = lazyString('test')(toArray)
	expect(data).toEqual(['t', 'e', 's', 't'])
})
