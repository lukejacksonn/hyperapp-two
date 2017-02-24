const { uniteActions } = require('../index.js')

const counter = require('./counter/effects')
const todos = require('./todos/effects')

module.exports = uniteActions({
  counter,
  todos,
})
