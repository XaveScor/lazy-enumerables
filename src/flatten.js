const isIterable = object => object !== null && typeof object[Symbol.iterator] === 'function'

export function* flatten(enumerable) {
	for (const el of enumerable) {
		if (isIterable(el)) {
			yield* flatten(el)
		} else {
			yield el
		}
	}
}
