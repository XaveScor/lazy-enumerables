import {lazyIterator} from './lazyIterator'

export function skip(n) {
	return function*(enumerable) {
		if (!enumerable.next) {
			return lazyIterator(enumerable)(skip(n))
		}
		let done = false
		for (let i = 0; i < n && !done; ++i) {
			const el = enumerable.next()
			done = el.done
		}
		if (done) {
			return
		}
		yield* enumerable
	}
}
