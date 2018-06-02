import {composeReverse} from './composeReverse'

export function lazyCompute(funcs, iterable) {
	const totalFunc = composeReverse(...funcs)
	return totalFunc(iterable)
}
