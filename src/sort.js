import {toArray} from './toArray'

const naturalOrderComparator = (a1, a2) => a1 < a2

function* bubbleSort(comp, arr) {
	const n = arr.length
	for (let i = 1; i < n; ++i) {
		for (let r = 0; r < n - i; ++r) {
			if (!comp(arr[r], arr[r + 1])) {
				const temp = arr[r]
				arr[r] = arr[r + 1]
				arr[r + 1] = temp
			}
		}
	}
	yield* arr
}

function split(comp, arr, splitPoint) {
	let i = 0
	let j = arr.length - 1
	const p = arr[splitPoint]
	do {
		while (comp(arr[i], p) && i < arr.length) i++
		while (comp(p, arr[j]) && j >= 0) j--
		if (i < j) {
			const temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			i++
			j--
		}
	} while (i < j)
}

export function sort(comp = naturalOrderComparator) {
	return function*(enumerable) {
		const arr = Array.isArray(enumerable) ? enumerable : toArray(enumerable)
		if (arr.length < 10) {
			yield* bubbleSort(comp, arr)
			return
		}
		const splitPoint = Math.floor(arr.length / 2)
		split(comp, arr, splitPoint)
		yield* sort(comp)(arr.slice(0, splitPoint))
		yield* sort(comp)(arr.slice(splitPoint, arr.length))
	}
}
