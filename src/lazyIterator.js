import {lazyCompute} from './lazyCompute'

function* toIterator(enumerable) {
	yield* enumerable
}

export function lazyIterator(enumerable) {
	return function(...funcs) {
		return lazyCompute(funcs, toIterator(enumerable))
	}
}
