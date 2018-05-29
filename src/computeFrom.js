import {toList} from './toList'

function composeRight(...funcs) {
	switch (funcs.length) {
		case 0:
			return _ => _
		case 1:
			return funcs[0]
		default:
			return funcs.reduceRight((total, cur) => (...args) => total(cur(...args)))
	}
}

export function computeFrom(list) {
	return function(...funcs) {
		const enhanced = composeRight(...funcs)
		return toList(enhanced(list))
	}
}
