export function toArray(enumerable) {
	if (!enumerable.lightNext) {
		return Array.from(enumerable)
	}
	const ret = []
	while (true) {
		const el = enumerable.lightNext()
		if (el === undefined) {
			break
		}
		ret.push(el)
	}
	return ret
}
