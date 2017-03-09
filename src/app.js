import { h, app, Router } from 'hyperapp'

// Routable Views
import Default from './routes/default'
import Fallback from './routes/fallback'
// Required Plugins
import Counter from './plugins/counter'
import Todos from './plugins/todos'
import User from './plugins/user'
import Logger from './plugins/logger'

app({
  root: document.querySelector('main'),
  hooks: {
    onRoute: {
      '/': (m,a) => console.log('ON ROUTE /', m, a),
      '/adventure': (m,a) => console.log('ON ROUTE /adventure'),
    }
  },
  view: {
    '/': Default,
    '*': Fallback,
  },
  plugins: [
    Router,
    Logger,
    Counter,
    Todos,
    User,
  ],
})
