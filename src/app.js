const { h, app, router } = require('hyperapp')

const effects = require('./effects')
const subscriptions = require('./subs')
const reducers = require('./reducers')
const model = require('./models')
const view = require('./views')

const state = {
  router,
  effects,
  subscriptions,
  reducers,
  model,
  view,
}

console.log(state);

// app(state);
