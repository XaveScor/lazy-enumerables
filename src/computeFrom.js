import {composeReverse} from './composeReverse'
import {toArray} from './toArray'

function* toGenerator(list) {
	yield* list
}

export function computeFrom(list) {
	return function(...funcs) {
		const enhanced = composeReverse(...funcs)
		return composeReverse(toGenerator, enhanced, toArray)(list)
	}
}
