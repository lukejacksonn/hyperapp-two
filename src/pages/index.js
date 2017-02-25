const { uniteViews } = require('../helpers')

const Index = require('../view')
const Counter = require('./counter')
const Todos = require('./todos')

module.exports = uniteViews({
  '': Index,
  Counter,
  Todos,
})
