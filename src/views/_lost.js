import { h } from 'hyperapp'

module.exports = (m,a) =>
  <view->
    <h1>Ooops are you lost?</h1>
    <a onclick={e => a.router.go('/')}>Go back home</a>
  </view->
