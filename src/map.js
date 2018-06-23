import {LightIteratorBase} from './LightIteratorBase'

class MapIterator extends LightIteratorBase {
	constructor(pred, iterable) {
		super()
		this.pred = pred
		this.iterable = iterable
	}

	lightNext() {
		const el = this.iterable.lightNext()
		if (el === undefined) {
			return
		}
		return this.pred(el)
	}
}

export function map(pred) {
	return function(iterable) {
		return new MapIterator(pred, iterable)
	}
}
