import {lazyCompute} from './lazyCompute'

function* toIterator(enumerable) {
	yield* enumerable
}

export function lazyIterator(enumerable) {
	return lazyCompute(toIterator(enumerable))
}
