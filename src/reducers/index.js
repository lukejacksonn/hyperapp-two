import { uniteActions } from '../helpers'

import counter from './_counter'
import todos from './_todos'

module.exports = uniteActions({
  counter,
  todos,
})
