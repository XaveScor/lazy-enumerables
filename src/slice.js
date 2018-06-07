import {composeReverse} from './composeReverse'
import {skip} from './skip'
import {take} from './take'

export function slice(start, end) {
	return composeReverse(skip(start), take(end - start))
}
