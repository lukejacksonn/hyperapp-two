export default ({
  decrement: (m,d,a) => ({
    counter: { ...m.counter,
      count: m.counter.count - 1
    }}),
  increment: (m,d,a) => ({
    counter: { ...m.counter,
      count: m.counter.count + 1
    }}),
})
