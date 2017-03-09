import { h } from 'hyperapp'
export default (m,a) =>
  <fallback->
    <h1>Ooops are you lost?</h1>
    <a onclick={e => a.router.go('/')}>Go back home</a>
  </fallback->
