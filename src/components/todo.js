import { h } from 'hyperapp'
export default ({m,a}) =>
  <todo->
    <text->{m.text}</text->
    <button onclick={e => a.r.todos.remove(m.text)}>x</button>
  </todo->
