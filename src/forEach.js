export function forEach(f) {
	return function*(enumerable) {
		for (const el of enumerable) {
			f(el)
			yield el
		}
	}
}
