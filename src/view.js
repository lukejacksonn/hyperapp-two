const { h } = require('hyperapp')

const Counter = require('./parts/counter/view')
const Todos = require('./parts/todos/view')

module.exports = (m,a,p) =>
  <app->
    <button onClick={e => alert('YOYO')}>CLICK</button>
    <Counter m={m.counter} a={a} p={p} />
    <Todos m={m.todos} a={a} p={p} />
  </app->
