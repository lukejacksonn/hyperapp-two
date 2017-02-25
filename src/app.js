const { h, app, router } = require('hyperapp')
const root = document.querySelector('main')

import effects from './effects'
import subscriptions from './subscriptions'
import update from './reducers'
import model from './models'
import view from './pages'

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
