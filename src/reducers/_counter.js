export default ({
  inc: (m,d,p) => ({ counter: { count: m.counter.count + 1 }}),
  dec: (m,d,p) => ({ counter: { count: m.counter.count - 1 }}),
})
