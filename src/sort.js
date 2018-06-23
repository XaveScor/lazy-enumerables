import {LightIteratorBase} from './LightIteratorBase'
import {toArray} from './toArray'

const naturalOrderComparator = (a1, a2) => a1 < a2

function bubbleSort(comp, arr, left, right) {
	let temp = null
	for (let i = left + 1; i < right; ++i) {
		for (let r = left; r < right - i; ++r) {
			if (!comp(arr[r], arr[r + 1])) {
				temp = arr[r]
				arr[r] = arr[r + 1]
				arr[r + 1] = temp
			}
		}
	}
}

function split(comp, arr, splitPoint, left, right) {
	let i = left
	let j = right - 1
	const p = arr[splitPoint]
	let temp
	do {
		while (comp(arr[i], p) && i < right) i++
		while (comp(p, arr[j]) && j >= left) j--
		if (i < j) {
			temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			i++
			j--
		}
	} while (i < j)
}

class SliceIterator {
	constructor(array, left, right) {
		this.array = array
		this.left = left
		this.right = right
	}

	lightNext() {
		if (this.right <= this.left) {
			return
		}
		return this.array[this.left++]
	}
}

class MutableSortIterator extends LightIteratorBase {
	constructor(array, comp, left, right) {
		super()
		this.array = array
		this.comp = comp
		this.left = left
		this.right = right
		this.generator = null
		this.next = 0
		this.current = null
		this.splitPoint = null
	}

	lightNext() {
		if (this.current === -1) {
			return
		}
		if (this.generator) {
			const el = this.generator.lightNext()
			if (el !== undefined) {
				return el
			}
		}
		switch ((this.current = this.next)) {
			case -1:
				this.generator = null
				return
			case 0:
				if (this.right - this.left < 10) {
					bubbleSort(this.comp, this.array, this.left, this.right)
					this.generator = new SliceIterator(this.array, this.left, this.right)
					this.next = -1
					return this.lightNext()
				}
				this.splitPoint = Math.floor(this.left + (this.right - this.left) / 2)
				split(this.comp, this.array, this.splitPoint, this.left, this.right)
				this.generator = new MutableSortIterator(this.array, this.comp, this.left, this.splitPoint)
				this.next = 1
				return this.lightNext()
			case 1:
				this.generator = null
				this.next = 2
				return this.array[this.splitPoint]
			case 2:
				this.generator = new MutableSortIterator(this.array, this.comp, this.splitPoint + 1, this.right)
				this.next = -1
				return this.lightNext()
			default:
			// error
		}
	}
}

export function sort(comp = naturalOrderComparator) {
	return function(enumerable) {
		const arr = Array.isArray(enumerable) ? enumerable : toArray(enumerable)
		return new MutableSortIterator(arr, comp, 0, arr.length)
	}
}
