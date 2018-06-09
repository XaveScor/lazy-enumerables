/* eslint-disable no-invalid-this, no-console */
import {lazyIterator, slice, sort, toArray} from '../index'
import Benchmark from 'benchmark'

const suite = new Benchmark.Suite()

const data = Array.from({length: 100}, () => Math.random())

export const virtualized = suite
	.add('common', () => {
		const newData = [...data]
		newData.sort()
		newData.slice(20, 30)
	})
	.add('lazy', () => {
		lazyIterator(data)(sort(), slice(20, 30), toArray)
	})
	.on('cycle', event => {
		console.log(String(event.target))
	})
	.on('complete', function() {
		console.log(`Fastest is ${this.filter('fastest').map('name')}`)
	})
