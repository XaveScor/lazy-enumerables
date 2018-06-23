/* eslint-disable no-invalid-this, no-console */
import {filter, lazyIterator, map, toArray} from '../index'
import Benchmark from 'benchmark'

const suite = new Benchmark.Suite()

const data = Array.from({length: 100}, () => Math.random())

export const flatMap = suite
	.add('filterMap', () => {
		data.filter(i => i % 2).map(i => i + 1)
	})
	.add('lazyFilterMap', () => {
		lazyIterator(data)(filter(i => i % 2), map(i => i + 1), toArray)
	})
	.on('cycle', event => {
		console.log(String(event.target))
	})
	.on('complete', function() {
		console.log(`Fastest is ${this.filter('fastest').map('name')}`)
	})
