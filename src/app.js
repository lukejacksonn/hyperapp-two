import { h, app, router } from 'hyperapp'
import effects from './effects'
import subscriptions from './subscriptions'
import reducers from './reducers'
import model from './models'
import view from './views'

const root = document.querySelector('main')
const hooks = {
  onAction: (name, data) => console.log('Action:', name, data),
  onUpdate: (last, model) => console.log('Update:', model),
}

const options = {
  router,
  effects,
  subscriptions,
  reducers,
  model,
  view,
  root,
  hooks
}

console.log('Options:', options)
app(options)
