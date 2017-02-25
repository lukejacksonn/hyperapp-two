import { uniteRoutes } from 'hyperapp-unite'

import Home from './_home'
import Counter from './_counter'
import Todos from './_todos'

module.exports = uniteRoutes({
  '': Home,
  Counter,
  Todos,
})
