const { uniteRoutes } = require('../helpers')

const Index = require('../view')
const Counter = require('./counter')
const Todos = require('./todos')

module.exports = uniteRoutes({
  '': Index,
  Counter,
  Todos,
})
