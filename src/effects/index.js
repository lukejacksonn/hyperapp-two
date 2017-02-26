import { uniteActions } from 'hyperapp-unite'

import counter from './_counter'
import todos from './_todos'

export default uniteActions({
  counter,
  todos,
})
