export function composeReverse(...funcs) {
	return funcs.reduceRight((total, cur) => (...args) => total(cur(...args)), _ => _)
}
