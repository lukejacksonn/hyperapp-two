export default ({
  input: (m,d,p) => ({
  todos: { ...m.todos,
    input: d,
  }}),
  add: (m,d,p) =>  ({
  todos: { ...m.todos,
    list: m.todos.list.concat(d),
    input: '',
  }}),
  remove: (m,d,p) =>  ({
  todos: { ...m.todos,
    list: m.todos.list.filter(x => x.text !== d),
  }}),
})
