export default ({
  add: (m,d,p) => ({ todos: { list: m.todos.list.concat(d) }}),
  remove: (m,d,p) => ({ todos: { list: m.todos.list.filter(x => x.text !== d) }}),
})
