import { h } from 'hyperapp'
module.exports = ({m,a}) =>
  <counter->
    <button onClick={e => a.decCounter()}>DEC</button>
    <count->{m.count}</count->
    <button onClick={e => a.incCounter()}>INC</button>
  </counter->
