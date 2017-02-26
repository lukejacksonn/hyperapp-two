import { h } from 'hyperapp'
export default ({m,a}) =>
  <todo->
    <text->{m.text}</text->
    <button onclick={e => a.removeTodos(m.text)}>x</button>
  </todo->
