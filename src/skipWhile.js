export function skipWhile(pred = () => true) {
	return function*(enumerable) {
		while (true) {
			const el = enumerable.next()
			if (el.done) {
				break
			}
			if (!pred(el.value)) {
				yield el.value
				yield* enumerable
			}
		}
	}
}
