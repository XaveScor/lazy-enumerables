export function take(n) {
	return function*(enumerable) {
		let done = false
		for (let i = 0; i < n; ++i) {
			const el = enumerable.next()
			done = el.done
			if (done) {
				break
			}
			yield el.value
		}
	}
}
