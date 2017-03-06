import { h } from 'hyperapp'

import {view as Counter} from '../components/counter'
import {view as Todos} from '../components/todos'

module.exports = (m,a) =>
  <view->
    <Counter m={m.counter} a={a} />
    <Todos m={m.todos} a={a} />
  </view->
