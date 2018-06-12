export function skip(n) {
	return function*(enumerable) {
		for (let i = 0; i < n; ++i) {
			const el = enumerable.next()
			if (el.done) {
				return
			}
		}
		yield* enumerable
	}
}
