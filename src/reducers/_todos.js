import i from 'immutable'
export default ({
  input: (m,d,p) => i.fromJS(m)
    .setIn(['todos','input'], d)
    .toJS(),
  add: (m,d,p) => i.fromJS(m)
    .updateIn(['todos','list'], xs => xs.concat(d))
    .setIn(['todos','input'], '')
    .toJS(),
  remove: (m,d,p) => i.fromJS(m)
    .updateIn(['todos','list'],
    xs => xs.filter(x => x.get('text') !== d))
    .toJS(),
})
