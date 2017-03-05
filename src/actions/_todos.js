export default ({
  input: (m,d,a) => ({
    todos: { ...m.todos,
      input: d,
    }}),
  add: (m,d,a) =>  ({
    todos: { ...m.todos,
      list: m.todos.list.concat(d),
      input: '',
    }}),
  remove: (m,d,a) =>  ({
    todos: { ...m.todos,
      list: m.todos.list.filter(x => x.text !== d),
    }}),
})
