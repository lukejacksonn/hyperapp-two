import { h } from 'hyperapp'

export const model = ({
  count: 0,
})

export const actions = ({
  decrement: (m,d,a,e) => ({
    counter: { ...m.counter,
      count: m.counter.count - 1
    }}),
  increment: (m,d,a,e) => ({
    counter: { ...m.counter,
      count: m.counter.count + 1
    }}),
})

export const view = ({m,a}) =>
  <counter->
    <button onclick={e => a.counter.decrement()}>DEC</button>
    <count->{m.count}</count->
    <button onclick={e => a.counter.increment()}>INC</button>
  </counter->
