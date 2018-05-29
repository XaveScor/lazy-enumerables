export function toList(enumerable) {
	const list = []
	for (const el of enumerable) {
		list.push(el)
	}
	return list
}
