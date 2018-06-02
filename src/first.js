export function first(pred = () => true) {
	return function(enumerable) {
		for (const el of enumerable) {
			if (pred(el)) {
				return el
			}
		}
		return null
	}
}
