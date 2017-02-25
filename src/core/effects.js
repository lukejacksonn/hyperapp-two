const { uniteActions } = require('../helpers/index.js')

const counter = require('../parts/counter/effects')
const todos = require('../parts/todos/effects')

module.exports = uniteActions({
  counter,
  todos,
})
