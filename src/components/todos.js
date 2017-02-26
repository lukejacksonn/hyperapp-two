import { h } from 'hyperapp'
import Todo from './todo'
export default ({m,a}) =>
  <todos->
    <button onclick={e => a.addTodos({ text: Math.random() })}>ADD TODO</button>
    {m.list.map(x => <Todo m={x} a={a} />)}
  </todos->
