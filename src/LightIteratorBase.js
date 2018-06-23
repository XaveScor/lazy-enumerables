export class LightIteratorBase {
	*[Symbol.iterator]() {
		let done = false
		do {
			const el = this.lightNext()
			if (el !== undefined) {
				yield el
			} else {
				done = true
			}
		} while (!done)
	}

	next() {
		const el = this.lightNext()
		if (el === undefined) {
			return {done: true}
		}
		return {done: false, value: el}
	}

	// eslint-disable-next-line
	lightNext() {}
}
