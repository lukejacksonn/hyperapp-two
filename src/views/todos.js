import { h } from 'hyperapp'
import Todo from './todo'
export default ({m,a}) =>
  <todos->
    <form onsubmit={e => e.preventDefault() || a.todos.add({text: m.todos.input})}>
      <input
        placeholder='Enter todo text'
        oninput={e => a.todos.input(e.target.value)}
        value={m.todos.input}
      />
      <button disabled={m.todos.input.length === 0}>+Todo</button>
    </form>
    <list->{m.todos.list.map(x => <Todo m={x} a={a} />)}</list->
  </todos->
