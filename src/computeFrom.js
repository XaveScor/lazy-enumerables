import {composeReverse} from './composeReverse'
import {toList} from './toList'

function* toGenerator(list) {
	yield* list
}

export function computeFrom(list) {
	return function(...funcs) {
		const enhanced = composeReverse(...funcs)
		return composeReverse(toGenerator, enhanced, toList)(list)
	}
}
