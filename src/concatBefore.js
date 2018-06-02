export function concatBefore(enumerable1) {
	return function*(enumerable2) {
		yield* enumerable1
		yield* enumerable2
	}
}
