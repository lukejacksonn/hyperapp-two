export default ({
  input: (m,d,p) => ({ todos: { list: m.todos.list, input: d }}),
  add: (m,d,p) => ({ todos: { list: d.text !== '' ? m.todos.list.concat(d) : m.todos.list, input: '' }}),
  remove: (m,d,p) => ({ todos: { list: m.todos.list.filter(x => x.text !== d), input: m.todos.input }}),
})
