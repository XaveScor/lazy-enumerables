import {LightIteratorBase} from './LightIteratorBase'

class FilterIterator extends LightIteratorBase {
	constructor(pred, iterable) {
		super()
		this.pred = pred
		this.iterable = iterable
	}

	lightNext() {
		while (true) {
			const el = this.iterable.lightNext()
			if (el === undefined) {
				return
			}
			if (this.pred(el)) {
				return el
			}
		}
	}
}

export function filter(pred) {
	return function(iterable) {
		return new FilterIterator(pred, iterable)
	}
}
