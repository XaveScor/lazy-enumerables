export function first(pred = () => true) {
	return function*(enumerable) {
		while (true) {
			const {value, done} = enumerable.next()
			if (done) {
				break
			}
			if (pred(value)) {
				yield value
				break
			}
		}
	}
}
