const { uniteActions } = require('../helpers')

const counter = require('./counter')
const todos = require('./todos')

module.exports = uniteActions({
  counter,
  todos,
})
