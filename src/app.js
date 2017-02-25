import { h, app, router } from 'hyperapp'
import effects from './effects'
import subscriptions from './subscriptions'
import update from './reducers'
import model from './models'
import view from './views'

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

console.log(state)
app(state)
