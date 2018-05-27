import path from 'path'

export default {
    input: path.resolve(__dirname, 'index.js'),
    output: {
        name: 'build.js',
        file: path.resolve(__dirname, 'dist', 'index.js'),
        format: 'umd'
    }
}