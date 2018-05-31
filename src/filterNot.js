import {filter} from './filter'

export function filterNot(pred = () => true) {
	return filter(el => !pred(el))
}
