const { h } = require('hyperapp')
module.exports = ({m,a,p}) =>
  <todos->{m.list.map(x => x.text)}</todos->
