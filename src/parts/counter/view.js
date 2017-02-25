const { h } = require('hyperapp')
module.exports = ({m,a,p}) =>
  <counter->
    <button onClick={e => a.decCounter()}>DEC</button>
    <count->{m.count}</count->
    <button onClick={e => a.incCounter()}>INC</button>
  </counter->
