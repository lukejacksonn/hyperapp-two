import { h } from 'hyperapp'
export default ({m,a}) =>
  <counter->
    <button onclick={e => a.counter.dec()}>DEC</button>
    <count->{m.count}</count->
    <button onclick={e => a.counter.inc()}>INC</button>
  </counter->
