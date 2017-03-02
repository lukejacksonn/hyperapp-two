export default ({
  decrement: (m,d,p) =>  ({
  counter: { ...m.counter,
    count: m.counter.count - 1
  }}),
  increment: (m,d,p) =>  ({
  counter: { ...m.counter,
    count: m.counter.count + 1
  }}),
})
