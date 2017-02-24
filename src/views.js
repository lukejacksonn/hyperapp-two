const { uniteViews } = require('../index.js')

const Counter = require('./counter/view')
const Todos = require('./todos/view')

module.exports = uniteViews({
  '': (m,a,p) => `
    <Counter m={m.counter} a={a} p={p} />
    <Todos m={m.todos} a={a} p={p} />
  `,
  Counter,
  Todos,
})
