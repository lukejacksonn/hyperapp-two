const { uniteActions } = require('../index.js')

const counter = require('./counter/reducer')
const todos = require('./todos/reducer')

module.exports = uniteActions({
  counter,
  todos,
})
