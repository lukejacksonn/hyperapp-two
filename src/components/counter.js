import { h } from 'hyperapp'
export default ({m,a}) =>
  <counter->
    <button onclick={e => a.counter.decrement()}>DEC</button>
    <count->{m.count}</count->
    <button onclick={e => a.counter.increment()}>INC</button>
  </counter->
