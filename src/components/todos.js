import { h } from 'hyperapp'
import Todo from './todo'
export default ({m,a}) =>
  <todos->
    <form onsubmit={e => a.todos.add({ text: m.input }) && e.preventDefault()}>
      <input placeholder='Enter todo text' value={m.input} onkeyup={e => a.todos.input(e.target.value)} />
      <button disabled={m.input.length > 0 ? false : true}>+Todo</button>
    </form>
    <ul>{m.list.map(x => <Todo m={x} a={a} />)}</ul>
  </todos->
