const { h } = require('hyperapp')

const Counter = require('../components/counter')

module.exports = (m,a,p) =>
  <view->
    <Counter m={m.counter} a={a} p={p} />
  </view->
