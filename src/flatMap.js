export function flatMap(pred) {
	return function*(enumerable) {
		for (const el of enumerable) {
			yield* pred(el)
		}
	}
}
