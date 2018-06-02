import {lazyGenerator} from './lazyGenerator'

export function lazyString(string) {
	return lazyGenerator(i => (i < string.length ? string[i] : null))
}
