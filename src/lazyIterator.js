import {LightIteratorBase} from './LightIteratorBase'
import {lazyCompute} from './lazyCompute'

class ArrayIterator extends LightIteratorBase {
	constructor(array) {
		super()
		this.i = 0
		this.array = array
	}

	lightNext() {
		const el = this.array[this.i++]
		return el
	}
}

class CommonIterator extends LightIteratorBase {
	constructor(enumerable) {
		super()
		this.enumerable = enumerable
	}

	lightNext() {
		const el = this.enumerable.next()
		if (!el.done) {
			return el.value
		}
	}
}

export function lazyIterator(enumerable) {
	return lazyCompute(
		Array.isArray(enumerable) || typeof enumerable === 'string' ? new ArrayIterator(enumerable) : new CommonIterator(enumerable),
	)
}
