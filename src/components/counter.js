import { h } from 'hyperapp'
export default ({m,a}) =>
  <counter->
    <button onclick={e => a.decCounter()}>DEC</button>
    <count->{m.count}</count->
    <button onclick={e => a.incCounter()}>INC</button>
  </counter->
