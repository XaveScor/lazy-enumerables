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

function* slice(arr, left, right) {
	for (let i = left; i < right; ++i) {
		yield arr[i]
	}
}

function* mutableSort(arr, comp, left, right) {
	if (right - left < 10) {
		bubbleSort(comp, arr, left, right)
		yield* slice(arr, left, right)
		return
	}
	const splitPoint = Math.floor(left + (right - left) / 2)
	split(comp, arr, splitPoint, left, right)
	yield* mutableSort(arr, comp, left, splitPoint)
	yield arr[splitPoint]
	yield* mutableSort(arr, comp, splitPoint + 1, right)
}

export function sort(comp = naturalOrderComparator) {
	return function*(enumerable) {
		const arr = Array.isArray(enumerable) ? enumerable : toArray(enumerable)
		yield* mutableSort(arr, comp, 0, arr.length)
	}
}
