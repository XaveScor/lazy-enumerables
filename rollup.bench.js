/* global __dirname */
import path from 'path'

const root = path.join(__dirname, 'benchmarks')
export default {
	input: path.join(root, 'benchmarks.js'),
	output: {
		name: 'build.js',
		file: path.join(root, 'dist', 'bench.js'),
		format: 'cjs',
	},
	external: ['benchmark'],
}
