const { uniteActions } = require('../helpers/index.js')

const counter = require('../parts/counter/reducer')
const todos = require('../parts/todos/reducer')

module.exports = uniteActions({
  counter,
  todos,
})
