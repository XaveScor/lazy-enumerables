import {isIterable} from './isIterable'

export function* flatten(enumerable) {
	for (const el of enumerable) {
		if (isIterable(el)) {
			yield* flatten(el)
		} else {
			yield el
		}
	}
}
