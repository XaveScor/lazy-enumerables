import {LightIteratorBase} from './LightIteratorBase'

class SkipIterator extends LightIteratorBase {
	constructor(n, enumerable) {
		super()
		this.n = n
		this.enumerable = enumerable
	}

	lightNext() {
		while (this.n > 0) {
			const el = this.enumerable.lightNext()
			if (el === undefined) {
				return
			}
			--this.n
		}
		return this.enumerable.lightNext()
	}
}

export function skip(n) {
	return function(enumerable) {
		return new SkipIterator(n, enumerable)
	}
}
