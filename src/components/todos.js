import { h } from 'hyperapp'
import Todo from './todo'
export default ({m,a}) =>
  <todos->
    {m.list.map(x => <Todo m={x} a={a} />)}
  </todos->
