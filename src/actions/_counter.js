export default ({
  decrement: (m,d,a,e) => ({
    counter: { ...m.counter,
      count: m.counter.count - 1
    }}),
  increment: (m,d,a,e) => ({
    counter: { ...m.counter,
      count: m.counter.count + 1
    }}),
})
