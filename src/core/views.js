const { uniteViews } = require('../helpers/index.js')

const Index = require('../view')
const Counter = require('../parts/counter/view')
const Todos = require('../parts/todos/view')

module.exports = uniteViews({
  '': Index,
  Counter,
  Todos,
})
