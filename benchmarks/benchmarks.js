import {flatMap} from './filterMap.bench'
import {virtualized} from './virtualized.bench'

virtualized.run({async: false})
flatMap.run({async: false})
