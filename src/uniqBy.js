export function uniqBy(pred = el => el) {
	const uniqueElements = new Set()
	return function*(enumerable) {
		for (const el of enumerable) {
			const checked = pred(el)
			if (!uniqueElements.has(checked)) {
				yield el
				uniqueElements.add(checked)
			}
		}
	}
}
