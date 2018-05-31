export function* uniq(enumerable) {
	const uniqueElements = new Set()
	for (const el of enumerable) {
		if (!uniqueElements.has(el)) {
			yield el
			uniqueElements.add(el)
		}
	}
}
