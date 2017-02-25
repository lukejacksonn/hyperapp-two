const counter = require('./counter')
const todos = require('./todos')

module.exports = [
  ...counter,
  ...todos,
]
