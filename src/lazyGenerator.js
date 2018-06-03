import {lazyCompute} from './lazyCompute'

function* generator(generate = () => null) {
	let i = 0
	let el = null
	while (true) {
		el = generate(i, el)
		if (el === null) {
			break
		}
		yield el
		++i
	}
}

export function lazyGenerator(generate = () => null) {
	return lazyCompute(generator(generate))
}
