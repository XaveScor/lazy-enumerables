export function takeWhile(pred = () => true) {
	return function*(enumerable) {
		while (true) {
			const el = enumerable.next()
			if (el.done || !pred(el.value)) {
				break
			}
			yield el.value
		}
	}
}
