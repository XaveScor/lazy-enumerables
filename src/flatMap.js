import {composeReverse} from './composeReverse'
import {flatten} from './flatten'
import {map} from './map'

export function flatMap(pred) {
	return composeReverse(map(pred), flatten)
}
