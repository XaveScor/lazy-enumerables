export function concat(enumerable2) {
	return function*(enumerable1) {
		yield* enumerable1
		yield* enumerable2
	}
}
