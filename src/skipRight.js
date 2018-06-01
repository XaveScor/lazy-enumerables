export function skipRight(n) {
	const arr = new Array(n)
	return function*(enumerable) {
		for (let i = 0; i < n; ++i) {
			const el = enumerable.next()
			if (el.done) {
				return
			}
			arr[i] = el.value
		}
		let i = 0
		for (const el of enumerable) {
			yield arr[i]
			arr[i] = el
			i = (i + 1) % n
		}
	}
}
