const { h } = require('hyperapp')

const Counter = require('./components/counter')
const Todos = require('./components/todos')

module.exports = (m,a) =>
  <view->
    <Counter m={m.counter} a={a} />
    <Todos m={m.todos} />
  </view->
