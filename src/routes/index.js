import Home from './_home'
import Lost from './_lost'

module.exports = ({
  '/': Home,
  '*': Lost,
})
