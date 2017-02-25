const { h } = require('hyperapp')

const Todos = require('../components/todos')

module.exports = (m,a,p) =>
  <view->
    <Todos m={m.todos} a={a} p={p} />
  </view->
