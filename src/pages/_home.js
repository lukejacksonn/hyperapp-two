import { h } from 'hyperapp'

import Counter from '../components/counter'
import Todos from '../components/todos'

module.exports = (m,a) =>
  <view->
    <Counter m={m.counter} a={a} />
    <Todos m={m.todos} />
  </view->
