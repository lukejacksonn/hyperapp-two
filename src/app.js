import { h, app, Router } from 'hyperapp'
import subscriptions from './subscriptions'
import actions from './actions'
import model from './models'
import view from './views'

const options = {
  model,
  view,
  actions,
  subscriptions,
  root: document.querySelector('main'),
  plugins: [Router],
}

console.log('Options:', options)
app(options)
