import {lazyGenerator} from '../lazyGenerator'
import {toArray} from '../toArray'

test('lazyGenerator::main', () => {
	const source = [1, 2, 3, 4, 5]
	const data = lazyGenerator(i => (i < source.length ? source[i] : null))(toArray)
	expect(data).toEqual(source)
})
