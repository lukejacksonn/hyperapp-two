import { uniteRoutes } from 'hyperapp-unite'

import Home from './_home'
import Lost from './_lost'

module.exports = uniteRoutes({
  '': Home,
  Lost,
})
