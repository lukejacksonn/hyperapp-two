const { h } = require('hyperapp')
module.exports = ({m}) =>
  <todos->{m.list.map(x => x.text)}</todos->
