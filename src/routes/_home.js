import { h } from 'hyperapp'

import Counter from '../views/counter'
import Todos from '../views/todos'

module.exports = (m,a) =>
  <home->
    <Counter m={m.counter} a={a} />
    <Todos m={m.todos} a={a} />
  </home->
