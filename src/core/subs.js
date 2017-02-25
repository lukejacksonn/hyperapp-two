const counter = require('../parts/counter/subs')
const ideas = require('../parts/todos/subs')

module.exports = [
  ...counter,
  ...ideas,
]
