export function take(n) {
	return function*(enumerable) {
		for (let i = 0; i < n; ++i) {
			const el = enumerable.next()
			if (el.done) {
				break
			}
			yield el.value
		}
	}
}
