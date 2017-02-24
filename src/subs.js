const counter = require('./counter/subs')
const ideas = require('./todos/subs')

module.exports = [
  ...counter,
  ...ideas,
]
