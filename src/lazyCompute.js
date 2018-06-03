import {composeReverse} from './composeReverse'

export function lazyCompute(iterable) {
	const res = function(...funcs) {
		const totalFunc = composeReverse(...funcs)
		return totalFunc(iterable)
	}
	res[Symbol.iterator] = function*() {
		yield* iterable
	}
	return res
}
