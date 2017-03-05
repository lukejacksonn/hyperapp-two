import { h } from 'hyperapp'
import Todo from './todo'
export default ({m,a}) =>
  <todos->
    <form onsubmit={e => e.preventDefault() || a.todos.add({text: m.input})}>
      <input
        placeholder='Enter todo text'
        oninput={e => a.todos.input(e.target.value)}
        value={m.input}
      />
      <button disabled={m.input.length > 0 ? false : true}>+Todo</button>
    </form>
    <ul>{m.list.map(x => <Todo m={x} a={a} />)}</ul>
  </todos->
