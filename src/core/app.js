const { h, app, router } = require('hyperapp')

const effects = require('./effects')
const subscriptions = require('./subs')
const reducers = require('./reducers')
const model = require('./models')
const view = require('./views')
const root = document.querySelector('main')

const state = {
  router,
  effects,
  subscriptions,
  reducers,
  model,
  view,
  root,
}

console.log(state);
app(state);
