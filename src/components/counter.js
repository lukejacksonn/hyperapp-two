import { h } from 'hyperapp'
export default ({m,a}) =>
  <counter->
    <button onclick={e => a.r.counter.decrement()}>DEC</button>
    <count->{m.count}</count->
    <button onclick={e => a.r.counter.increment()}>INC</button>
  </counter->
