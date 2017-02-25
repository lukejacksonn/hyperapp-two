const { h, app, router } = require('hyperapp')

const effects = require('./effects')
const subscriptions = require('./subscriptions')
const update = require('./reducers')
const model = require('./models')
const view = require('./pages')
const root = document.querySelector('main')

const state = {
  router,
  effects,
  subscriptions,
  update,
  model,
  view,
  root,
}

console.log(state);
app(state);
