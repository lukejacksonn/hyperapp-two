import { h } from 'hyperapp'

import Counter from '../views/counter'
import Todos from '../views/todos'
import User from '../views/user'

export default (m,a) =>
  <default->
    <User m={m} a={a} />
    <a href='/adventure' onclick={e => e.preventDefault() || a.router.go('/adventure')}>Adventure</a>
    {m.user.authed &&
      <authed->
        <Counter m={m} a={a} />
        <Todos m={m} a={a} />
      </authed->
    }
  </default->
