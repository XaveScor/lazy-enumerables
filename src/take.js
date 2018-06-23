import {LightIteratorBase} from './LightIteratorBase'

class TakeIterator extends LightIteratorBase {
	constructor(n, enumerable) {
		super()
		this.n = n
		this.enumerable = enumerable
	}

	lightNext() {
		while (this.n > 0) {
			--this.n
			return this.enumerable.lightNext()
		}
	}
}

export function take(n) {
	return function(enumerable) {
		return new TakeIterator(n, enumerable)
	}
}
